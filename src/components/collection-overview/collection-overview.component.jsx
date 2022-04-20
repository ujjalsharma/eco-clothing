import React from "react";
import { connect} from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview, selectShopCollection } from "../../redux/shop/shop.selector";
import './collection-overview.styles.scss'

const CollectionOverView = ({collections}) => (
    <div className="collection-overview">
         {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        } 
    </div>

);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverView);