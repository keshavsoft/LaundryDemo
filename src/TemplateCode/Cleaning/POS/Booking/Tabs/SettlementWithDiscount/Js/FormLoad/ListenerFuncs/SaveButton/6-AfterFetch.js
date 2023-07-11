let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL({inOrderNumber: 16});
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          });
    };
};

let jFLocalToURL = ({ inOrderNumber }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);
    const k1=new URL("../Orders/OrdersShow/OrdersShow.html",myUrlWithParams.href);

    window.location.href = k1.href;
};

export { StartFunc };