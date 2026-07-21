function App() {

  function handleClick(){
    alert ("i am clicked");
  }

  function handleMouseOver(){
    alert("para ke upar mouse lekar aaya hai")
  }
  return (
    <div>

    <p onMouseOver={handleMouseOver}>
      I am para 
    </p>
      <button onClick={handleClick}>
        click me
      </button>
    </div>
  )
}

export default App
