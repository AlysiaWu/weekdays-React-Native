//Import some code we need 
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require("./src/day-item")

//create a react component 
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
      <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems
  }
});

//Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',// Move stuff height wise
    alignItems:'center'  //Move item width wise
  },
  textStyle: {

  }
}); 


// show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});

