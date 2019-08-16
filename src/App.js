import React, {Component} from 'react';
import './App.css';
import EstimateDisplay from './components/EstimateDisplay';
import EstimateInput from './components/EstimateInput';
import ToggleScale from './components/ToggleScale';


const toggleButtonTitle_fibonacci = 'Use Fibonacci';
const toggleButtonTitle_tshirt = 'Use T-Shirt';
const inputValues_fibonacci = ['1','2','3','5','8','13','21','34','55','89','144','?'];
const inputValues_tshirt = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL', '?'];


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toggleButtonTitle: toggleButtonTitle_tshirt, 
      inputValues: inputValues_fibonacci,
      currentEstimateValue: '1', 
      currentInputValue: 1
    };

    this.onToggleScaleClick = this.onToggleScaleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateEstimateValue = this.updateEstimateValue.bind(this);
  }

  componentWillMount(){
    this.updateEstimateValue();
  }
  
  onToggleScaleClick(){
    this.setState(
      {
        inputValues: (this.state.inputValues === inputValues_tshirt) ? inputValues_fibonacci : inputValues_tshirt,
        toggleButtonTitle: (this.state.toggleButtonTitle === toggleButtonTitle_tshirt) ? toggleButtonTitle_fibonacci : toggleButtonTitle_tshirt,
        currentInputValue: 1
      },
      () => this.updateEstimateValue()
    );
  }
  
  handleInputChange(e){
    this.setState(
      {currentInputValue: e.target.value},
      () => this.updateEstimateValue()
    );
  }
  
  updateEstimateValue(){
    this.setState({
      currentEstimateValue: this.state.inputValues[this.state.currentInputValue - 1]
    });
  }

  render(){
      return (
        <div className="app-container">
          <EstimateDisplay value={this.state.currentEstimateValue} />
          <ToggleScale onClick={this.onToggleScaleClick} title={this.state.toggleButtonTitle} />
          <EstimateInput steps={this.state.inputValues.length} onChange={this.handleInputChange} value={this.state.currentInputValue}/>
        </div>
      )
  }
}

export default App;