import React, {Component} from 'react';

export default class Header extends Component {
   render() {
       let today = new Date();
       var dd = today.getDate();
       var mm = today.getMonth() + 1;
       let dateToday = mm + '/' + dd;
       return(
           <div className="toDoTitle">
             My To-Do List for {dateToday}
           </div>
       )
   }
}