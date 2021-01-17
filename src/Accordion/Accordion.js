import React from "react";
import './Accordion.css';
import STORE from '../dummy-store'

class Accordion extends React.Component {
    static defaultProps = {
        categories: [],
        subcategories: []
    };

    state = {
        activeCategoryIndex: null,
        categories: STORE.categories,
        subcategories: STORE.subcategories,
        subcategory: ''
    }

    handleSetActiveCategory = (categoryIndex) => {
        this.setState({ activeCategoryIndex: categoryIndex }) 
        this.props.addCategory(categoryIndex)       
    }

    handleAddsubcategory = (subcategory) => {
      this.setState({ subcategory: subcategory }) 
      this.props.addSubcategory(subcategory)       
  }

    renderCategory(category, index, activeCategoryIndex) {
        return (
            <ul className='Accordion__item' key={index}>
                <button className="Category__button" type='button' onClick={() => this.handleSetActiveCategory(index)}>
                    {category.name}
                </button>
                {(activeCategoryIndex === index) && this.renderSubcategories(category['subcategories'])}
            </ul>
        )
    }

    renderSubcategories(subcategories) {
      console.log(subcategories)
      return (
        <>
          {
            subcategories.map(subcategory => (
              <li key={subcategory.id}>
                <input 
                  type='radio'
                  className='subcategory_option' 
                  name={subcategory.name} 
                  value={this.props.subcategory}
                  onChange={() => this.handleAddsubcategory(this.props.category)}
               />
                <label>{subcategory.name}</label>
              </li>
            ))
          }
        </>
      )
    }

    render() {
        const { activeCategoryIndex } = this.state
        return (
            <div className='Accordion'>
                {this.state.categories.map((category, index) =>
                  this.renderCategory(category, index, activeCategoryIndex)
                )}
            </div>
        )
    }
}

export default Accordion;