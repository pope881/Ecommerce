import { css } from '@emotion/css'

export const styles = {
    offers {
        width: '75%',
        display: 'flex',
        margin: 'auto',
        padding: '0rem 14rem',
        marginBottom: '10rem',
        background: 'linear-gradient(180deg, #ce1446 0%, #e1ffea22 90%)',
        borderRadius: '25px',
    }
    
    offers__left {
        /* flex: 1, */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
    offers__left h1 {
        color:' #0c0b0b',
        fontSize: '8rem',
        fontWeight: '600',
        textAlign: 'center',
    }
    
    offers__left p {
        color:'#0c0b0b',
        fontSize: '2.2rem',
        fontWeight: '600',
    }
    
    offers__left button {
        fontSize: '1.6rem',
        color: '#ce1446',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '25px',
        padding: 1rem 4rem,
        transition: 0.3s,
        marginTop: '2rem',
    }
    
    offers__left button:hover,
    offers__left button:active {
        backgroundColor: #f8f8ff,
    }
    offers__left button {
        border: 1px solid #ce1446,
        backgroundColor: #ce1446,
        color: #f8f8ff,
    }
    
    offers__left button:hover,
    offers__left button:active {
        backgroundColor: #f8f8ff,
        color: #ce1446,
    }
    
    offers__right {
        flex: 1,
        display: flex,
        alignItems: center,
        justifyContent: flex-end,
        paddingTop: 5rem,
    }
    
}