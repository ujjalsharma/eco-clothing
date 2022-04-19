import React from "react";

import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
      
)

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);