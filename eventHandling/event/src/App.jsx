function App() {

  function handleMouseOver(){
    alert("para ke upar mouse lekar aaya hai")
  }
  function handleInputChange(e){
    // console.log("input mein value change hui hai")
    console.log("value till now: " , e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert ("form submit kardu kya");
  }
  return (
    <div>
{/*  important */}

<button onClick={() => alert ("button click hua hai")}>
  click me
</button>


   {/* <form onSubmit  = {handleSubmit}>
    <input type="text" onChange =  {handleInputChange} />
    <button type="submit">submit</button>
   </form> */}
     {/* <p onMouseOver={handleMouseOver}>
      I am para 
    </p>
      <button onClick={handleClick}>
        click me
      </button> */}
    </div>
  )
}

export default App
