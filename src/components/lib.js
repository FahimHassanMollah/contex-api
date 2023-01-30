class Contex {
    value = null;
    constructor(value ){
        this.value = value;
    }


    // providers 
      Provider = ({children,value}) => {
        this.value = value;
        return children;
      }
      
      
    // consumers

    Consumer = ({children}) => {
      return children(this.value)
    }


    



}

function createContex(value = null){
    const contex = new Contex(value);
    return {
        Provider:contex.Provider,
        Consumer:contex.Consumer,
    }
}


export default createContex;