import {FC} from 'react'
import {Field, Form, Formik, FormikHelpers} from 'formik'
import styles from "../components/UIBar.module.sass";
import {
    SearchOutlined
} from '@ant-design/icons';

export const SearchInput: FC = () => {
    const initialValues = {
        text: ''
    }
    type initialValuesTypes = typeof initialValues
    const onSubmit = (
        values: initialValuesTypes,
        {setSubmitting}: FormikHelpers<initialValuesTypes>,
    ) => {
        alert(values.text)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={onSubmit}>
                {({values}) => (
                    <Form>
                        <div className={styles.searchInput}>
                            <div>
                                <Field
                                    type="text"
                                    name="text"
                                    value={values.text}
                                    // validate={validateTitle}
                                />
                            </div>

                            <div>
                                <button className={styles.loup} type="submit">
                                    <SearchOutlined  />
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
