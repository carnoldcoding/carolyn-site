import styled from 'styled-components'; 

export const FormContainer = styled.div`
    min-width: 300px;
    max-width: 800px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0 1rem;

    header{
        display: flex;
        gap:  2rem;
        .form-image{
            flex: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                height: 120px;
            }
        }
        .form-details-wrapper{
            flex: 50%;
            h1{
                color: #CF980A;
                text-decoration: underline;
                margin-bottom: 10px;
            }
            p{
                color: #206D91;
                font-size: 1.2rem;
            }
        }
    }
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-top: 30px;
        input{
            padding: 0 1rem;
            height: 40px;
            border-radius: 10px;
            flex-basis: 43%;
            outline: none;
            border: 1px solid black;
            font-size: 1.2rem;
        }
    }

`
