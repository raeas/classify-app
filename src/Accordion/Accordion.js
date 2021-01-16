import React from "react";
import './Accordion.css';
import STORE from '../dummy-store'

class Accordion extends React.Component {
    static defaultProps = {
        categories: []
    };

    state = {
        activeCategoryIndex: null,
        categories: STORE.categories
    }

    handleSetActiveCategory = (categoryIndex) => {
        this.setState({ activeCategoryIndex: categoryIndex }) 
        this.props.addCategory(categoryIndex)       
    }

    renderItem(category, index, activeCategoryIndex) {
        return (
            <li className='Accordion_item' key={index}>
                <button type='button' onClick={() => this.handleSetActiveCategory(index)}>
                    {category.name}
                </button>
                {(activeCategoryIndex === index) && this.subcategories(category['subcategories'])}
            </li>
        )
    }

    subcategories(subcategories) {
      console.log(subcategories)
      return (
        <>
          {
            subcategories.map(subcategories => (
              <p key={subcategories.id}>{subcategories.name}</p>
            ))
          }
        </>
      )
    }

    render() {
        const { activeCategoryIndex } = this.state
        // const { sections } = this.props
        return (
            <ul className='Accordion'>
                {this.state.categories.map((category, index) =>
                  this.renderItem(category, index, activeCategoryIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;