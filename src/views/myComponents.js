import React from "react";

class MyComponent extends React.Component {
  handleClickButton = () => {
    alert("click Me");
    console.log("123");
  };

  render() {
    return (
      <>
        <div>Hello Son Đào</div>
        <div>Hello Son Đào</div>
        <div className="btn-box">
          <button onClick={() => this.handleClickButton()}>Submit</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
