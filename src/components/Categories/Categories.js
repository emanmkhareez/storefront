import React from 'react';
import { useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
//use useDispatch hooks 
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { changeSelected, getData } from '../../store/actions/action';



function Categories(props) {
    // use dispatch hooks instead of mapDispatchToProps
    const dispatch = useDispatch();
    //render the data depend on dispatch
    useEffect(() => {
        //dispatch action  to change active product
        dispatch(getData()).then(() => {
            //dispatch action  to change category as default val
            dispatch(changeSelected(""))
        })
    }, [dispatch])


    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '31%', marginTop: '1%', fontSize: '25px' }}>
                {/* map to render  categories from redux store  */}
                {props.categories.map((element, idx) => {
                    // dispatch action   to change category depend on list 
                    return <Link color="inherit" key={idx} onClick={() => { dispatch(changeSelected(element.category)) }}>
                        {element.name}
                    </Link>
                })}
            </Breadcrumbs>
            <div style={{ fontSize: '50px', marginTop: '3%', textAlign: 'center' }}>{props.activeCategory.name}</div>
            <div style={{ fontSize: '25px', marginTop: '2%', color: 'GrayText', textAlign: 'center' }}>{props.activeCategory.description}</div>
        </>
    )
}
// this function we used to return some state info from redux store 
const mapStateToProps = (state) => {
    return state.categories;
}

//connect these fun with our  react commponent 
export default connect(mapStateToProps)(Categories);