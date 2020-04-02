import React, { useEffect, useState} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  import { StyleSheet, css } from 'aphrodite';

// const data = {"Test": "Test data"};
const myData = [];

const styles = StyleSheet.create({
  container: {
    padding: '5px',
    border: '1px solid #879097',
    marginTop: '10px',
    boxShadow: '0 4px 8px 0 #879097',
  },
});


class CpuData  extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          ws: null,
          data: null,
          dataArray: [],
      };
  }

  

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
      this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
      var ws = new WebSocket("ws://localhost:8001/index/");
      let that = this; // cache the this
      var connectInterval;

      // websocket onopen event listener
      ws.onopen = () => {
          console.log("connected websocket main component");

          this.setState({ ws: ws });

          that.timeout = 250; // reset timer to 250 on open of websocket connection 
          clearTimeout(connectInterval); // clear Interval on on open of websocket connection
      };

      ws.onmessage =  (event) =>{
        
        this.setState({
            data: JSON.parse(event.data)
        });
        
        this.setState({
            dataArray: [...this.state.dataArray, this.state.data.data]
        })        
      };

      // websocket onclose event listener
      ws.onclose = e => {
          console.log(
              `Socket is closed. Reconnect will be attempted in ${Math.min(
                  10000 / 1000,
                  (that.timeout + that.timeout) / 1000
              )} second.`,
              e.reason
          );

          that.timeout = that.timeout + that.timeout; //increment retry interval
          connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
      };

      // websocket onerror event listener
      ws.onerror = (err) => {
          console.log(
              "Socket encountered error: ",
              err.message,
              "Closing socket"
          );

          ws.close();
      };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
      const { ws } = this.state;
      if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };


  
  render() { 
      return (
        <div className={css(styles.container)}>
          <h3>Real Time CPU Usage</h3>
          <LineChart
            width={1000}
            height={500}
            data={this.state.dataArray}
            margin={{
             top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="frequency" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="usage" stroke="#82ca9d" />
          </LineChart>
        </div>
      );
  }
}

export default CpuData;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'tomato'
//   },
//   section: {
//     color: 'white',
//     textAlign: 'center',
//     margin: 30
//   }
// });