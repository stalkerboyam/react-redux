import Swal from 'sweetalert2';
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        try{

            dispatch({
                type: "withdraw",
                payload: amount
            });
        }

        catch (error){
            Swal.fire({
                icon: 'error',
                text: error,
              })
        }
        
    }
}