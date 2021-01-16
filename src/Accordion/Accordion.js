import React from "react";
import './Accordion.css';
import STORE from '../dummy-store'

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activeSectionIndex: null,
        sections: STORE.classes
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex }) 
        this.props.addCategory(sectionIndex)       
    }

    renderItem(section, index, activeSectionIndex) {
        return (
            <li className='Accordion_item' key={index}>
                <button type='button' onClick={() => this.handleSetActiveSection(index)}>
                    {section.name}
                </button>
                {(activeSectionIndex === index) && this.subcategories(section['subclasses'])}
            </li>
        )
    }

    subcategories(subs) {
      console.log(subs)
      return (
        <>
          {
            subs.map(sub => (
              <p key={sub.id}>{sub.name}</p>
            ))
          }
        </>
      )
    }

    render() {
        const { activeSectionIndex } = this.state
        // const { sections } = this.props
        return (
            <ul className='Accordion'>
                {this.state.sections.map((section, index) =>
                  this.renderItem(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;