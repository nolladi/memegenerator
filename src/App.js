import React from "react";
import MemeHeader from "./components/MemeHeader";
import MemeBody from "./components/MemeBody";
import html2canvas from "html2canvas";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            topText:"",
            botText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[],
            blackOrWhite:"black",
        }
    this.handleChange=this.handleChange.bind(this)
    this.handleSumbit=this.handleSumbit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then(response=>{
                const {memes}=response.data
                this.setState({allMemeImgs:memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})




    }

    handleSumbit(event){
    event.preventDefault()
        html2canvas(document.querySelector("#capture"), {
            allowTaint: true,
            useCORS: true
        })
            .then(canvas => {
            //document.body.appendChild(canvas)

                let dt = canvas.toDataURL('image/jpeg');

                const w = window.open('about:blank', 'image from canvas');
                w.document.write("<img src='"+dt+"' alt='from canvas'/>");
                console.log('Saved!');

        });

    }


    render() {

        return (

        <div>
            <MemeHeader/>
            <MemeBody
                handleSubmit={this.handleSumbit}
                handleFunction={this.handleChange}
                blackOrWhite={this.state.blackOrWhite}
                topText={this.state.topText}
                botText={this.state.botText}
                randomImage={this.state.randomImage}
                allMemeImgs={this.state.allMemeImgs}

            />
        </div>
        )
    }
}

export default App;
