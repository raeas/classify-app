import React from "react";
import './Accordion.css';
import AppContext from '../AppContext'

class Accordion extends React.Component {

  static contextType = AppContext

    static defaultProps = {
        categories: [],
        subcategories: []
    };

    state = {
        activeCategoryIndex: null,
        categories: this.context.categories,
        subcategories: this.context.subcategories,
        // catsandsubcats: this.context.catsandsubcats,
        subcategory: ''
    }

    handleSetActiveCategory = (categoryIndex) => {
        this.setState({ activeCategoryIndex: categoryIndex }) 
        this.props.addCategory(categoryIndex)       
    }

    handleAddSubcategory = (e) => {
      this.props.addSubcategory(e.target.value)       
  }

  // //   //added for troubleshooting - no fix
  //   handleAddCategory = (category) => {
  //     this.props.addCategory(category)       
  // }

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
              // console.log('subcats.cat ', subcategory.category)
              // console.log('cat ', category)
              if (subcategory.category === category.id) {
                return <li className='Subcat' key={subcategory.id}>
                  <label>
                    <input
                      type='radio'
                      className='subcategory_option' 
                      name='subcategory' 
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