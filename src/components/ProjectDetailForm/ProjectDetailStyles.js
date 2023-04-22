import styled from 'styled-components'; 

export const FormContainer = styled.div`
    min-width: 300px;
    width: 800px;
    margin: auto;
    header{
        display: flex;
        gap:  2rem;

        .form-image{
            background-color: lightpink;
            flex: 50%;
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

`
