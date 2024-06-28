import IrisHeader from '../../components/Iris/iris';
import RoseHeader from '../../components/Rose/rose';
import './headers.css';

function Headers() {
    return (
        <>
            <h2>Iris</h2>
            <IrisHeader></IrisHeader>
            <h2>Rose</h2>
            <RoseHeader></RoseHeader>
        </>
    )
}

export default Headers;