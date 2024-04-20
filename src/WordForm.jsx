import { useFormik } from "formik";
import './WordForm.css'

const validate = values => {
    const errors = {};
    if(!values.noun1){
        errors.noun1 = 'Required';
    } else if (Number(values.noun1)) {
        errors.noun1 = 'Cannot Be A Number'
    }

    if(!values.name){
        errors.name = 'Required';
    } else if (Number(values.name)) {
        errors.name = 'Cannot Be A Number'
    }

    if(!values.adjective1){
        errors.adjective1 = 'Required';
    } else if (Number(values.adjective1)) {
        errors.adjective1 = 'Cannot Be A Number'
    }

    if(!values.noun2){
        errors.noun2 = 'Required';
    } else if (Number(values.noun2)) {
        errors.noun2 = 'Cannot Be A Number'
    }

    if(!values.noun3){
        errors.noun3 = 'Required';
    } else if (Number(values.noun3)) {
        errors.noun3 = 'Cannot Be A Number'
    }

    if(!values.adjective2){
        errors.adjective2 = 'Required';
    } else if (Number(values.adjective2)) {
        errors.adjective2 = 'Cannot Be A Number'
    }

    if(!values.adjective3){
        errors.adjective3 = 'Required';
    } else if (Number(values.adjective3)) {
        errors.adjective3 = 'Cannot Be A Number'
    }

    if(!values.emotion){
        errors.emotion = 'Required';
    } else if (Number(values.emotion)) {
        errors.emotion = 'Cannot Be A Number'
    }

    return errors;
}

const WordForm = ({createStory}) => {
    const formik = useFormik({
        initialValues: {
            noun1: '',
            name: '',
            adjective1: '',
            noun2: '',
            noun3: '',
            adjective2: '',
            adjective3: '',
            emotion: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
            createStory({...values})
            formik.resetForm()
        }
    })

    return (
        <div className="WordForm">
            <form className="WordForm-form" onSubmit={formik.handleSubmit}>
                <label className="WordForm-label" htmlFor="noun1"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="noun1"
                    name="noun1"
                    placeholder="Noun"
                    value={formik.values.noun1}
                    onChange={formik.handleChange}
                />
                {formik.errors.noun1 && formik.touched.noun1 && (
                    <div className="WordForm-error">{formik.errors.noun1}</div>
                )}
                <label className="WordForm-label" htmlFor="name"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                    <div className="WordForm-error">{formik.errors.name}</div>
                )}
                <label className="WordForm-label" htmlFor="adjective1"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="adjective1"
                    name="adjective1"
                    placeholder="Adjective"
                    value={formik.values.adjective1}
                    onChange={formik.handleChange}
                />
                {formik.errors.adjective1 && formik.touched.adjective1 && (
                    <div className="WordForm-error">{formik.errors.adjective1}</div>
                )}
                <label className="WordForm-label" htmlFor="noun2"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="noun2"
                    name="noun2"
                    placeholder="Noun"
                    value={formik.values.noun2}
                    onChange={formik.handleChange}
                />
                {formik.errors.noun2 && formik.touched.noun2 && (
                    <div className="WordForm-error">{formik.errors.noun2}</div>
                )}
                <label className="WordForm-label" htmlFor="noun3"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="noun3"
                    name="noun3"
                    placeholder="Noun"
                    value={formik.values.noun3}
                    onChange={formik.handleChange}
                />
                {formik.errors.noun3 && formik.touched.noun3 && (
                    <div className="WordForm-error">{formik.errors.noun3}</div>
                )}
                <label className="WordForm-label" htmlFor="adjective2"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="adjective2"
                    name="adjective2"
                    placeholder="Adjective"
                    value={formik.values.adjective2}
                    onChange={formik.handleChange}
                />
                {formik.errors.adjective2 && formik.touched.adjective2 && (
                    <div className="WordForm-error">{formik.errors.adjective2}</div>
                )}
                <label className="WordForm-label" htmlFor="adjective3"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="adjective3"
                    name="adjective3"
                    placeholder="Adjective"
                    value={formik.values.adjective3}
                    onChange={formik.handleChange}
                />
                {formik.errors.adjective3 && formik.touched.adjective3 && (
                    <div className="WordForm-error">{formik.errors.adjective3}</div>
                )}
                <label className="WordForm-label" htmlFor="emotion"></label>
                <input
                    className="WordForm-input" 
                    type="text"
                    id="emotion"
                    name="emotion"
                    placeholder="Emotion"
                    value={formik.values.emotion}
                    onChange={formik.handleChange}
                />
                {formik.errors.emotion && formik.touched.emotion && (
                    <div className="WordForm-error">{formik.errors.emotion}</div>
                )}
                <button className="WordForm-btn" type="submit" onClick={formik.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default WordForm