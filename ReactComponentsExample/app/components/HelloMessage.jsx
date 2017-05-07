var React=require("react");

var HelloMessage=React.createClass({
    render:function () {
        var name=this.props.name;
        var message=this.props.message;
        return(
            <div>
                <p>Hello {name}!</p>
                <p>Some {message}</p>
            </div>
        );
    }
});

module.exports =HelloMessage;