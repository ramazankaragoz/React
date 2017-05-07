var React=require("react");

var HelloForm=React.createClass({

    onFormSubmit:function (e) {
      e.preventDefault();
      var name=this.refs.name.value;
      var message=this.refs.message.value;
      var updates={};

      if(name.length>0)
      {
          this.refs.name.value="";
          updates.name=name;
      }

      if(message.length>0)
      {
          this.refs.message.value="";
          updates.message=message;
      }

      this.props.onNewData(updates);

    },

    render : function () {
        return(

            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter a name.."/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter a message.."/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

module.exports=HelloForm;