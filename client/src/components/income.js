import React, { Component } from 'react';

import axios from 'axios';

class income extends Component {

    state = {
        career:'',
        staticOrVariedIncome:'',
        monthlyIncome:'',
        incomeList:[]
    }

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const newState = {...this.state}
        newState[name] = value;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/income', this.state)
    }

    componentDidMount() {
        axios.get('/api/income')
        .then((res) => {
            this.setState({incomeList: res.data})
        })
    }

    render(){
        console.log('From render()', this.state)

        const newIncomeList = this.state.incomeList;

        const currencyComponents = newIncomeList.map((incomeList, i) => {
            return(
                <div key={i}>
                    <p>{incomeList.career}</p>
                    <p>{incomeList.staticOrVariedIncome}</p>
                    <p>{incomeList.monthlyIncome}</p>
                </div>
            )
        })

        return(
            <div>
                {currencyComponents}

                <form onSubmit={this.handleSubmit}>
                <input
                name="career"
                type="text"
                placeholder="Career"
                value={this.state.career}
                onChange={this.changeHandler}
                />
                <br></br>
                <input
                name="staticOrVariedIncome"
                type="text"
                placeholder="Static or Varied"
                value={this.state.staticOrVariedIncome}
                onChange={this.changeHandler}
                />
                <br></br>
                <input
                name="monthlyIncome"
                type="number"
                placeholder="Monthly Income"
                value={this.state.monthlyIncome}
                onChange={this.changeHandler}
                />
                <br></br>
                <input
                type="submit"
                value="Submit"
                />
                </form>



            </div>
        )
    }

}

export default income