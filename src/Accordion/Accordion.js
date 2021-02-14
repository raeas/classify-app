import React from "react";
import './Accordion.css';
import AppContext from '../AppContext'

class Accordion extends React.Component {

  static contextType = AppContext

    state = {
        activeCategoryIndex: null,
        categories: this.context.categories,
        subcategories: this.context.subcategories,
        subcategory: '',
        books: this.context.books
    }

    handleSetActiveCategory = (categoryIndex) => {
        this.setState({ activeCategoryIndex: categoryIndex }) 
        this.props.addCategory(categoryIndex + 1)       
    }

    handleAddSubcategory = (e) => {
      this.props.addSubcategory(e.target.value)       
  }

    renderCategory(category, index, activeCategoryIndex) {
        return (
            <ul className='Accordion__item' key={index}>
                <button className="Category__button" type='button' onClick={() => this.handleSetActiveCategory(index)}>
                    {category.name}
                </button>
                {(activeCategoryIndex === index) && this.renderSubcategories(category)}
            </ul>
        )
    }

    renderSubcategories(category) {
      return (
            this.state.subcategories.map(subcategory => {
              if (subcategory.category === category.id) {
                return <li className='Subcat' key={subcategory.id}>
                  <label>
                      <input
                        type='radio'
                        className='subcategory_option' 
                        name='subcategory_id' 
                        value={subcategory.id}
                        onChange={(e) => this.handleAddSubcategory(e)}
                      />
                    {subcategory.name}
                    </label>
                </li>
              }
              else {return ''}
            })
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