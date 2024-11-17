export const tableComponent = () => {
    let data= [];
    let PrecedenteSuccessiva=0;
    let templateRow = `
        <tr class="tbl1">
            <td>#D1</td>
            <td>#D2</td>
            <td>#D3</td>
            <td>#D4</td>
            <td>#D5</td>
            <td>#D6</td>
            <td>#D7</td>
            <td>#D8</td>
        </tr>
    `;
    let parentElement;

    return {
        setData: (dato) =>{data=dato},
        setParentElement: (pr) => {
            parentElement = pr;
        },
        start:(startday)=> {PrecedenteSuccessiva=startday},
        setTipo: (tip)=>{tipo=tip;},
        render: () => {
            const exportData = (date) => {
                // FUNZIONE CHE FORMATTA LA DATA
                let d = date.getDate().toString().padStart(2, '0'); // SE LEN MINORE DI 2 AGGIUNGE "0"
                let m = (date.getMonth() + 1).toString().padStart(2, '0');
                let y = date.getFullYear();
                return y + "-" + m + "-" + d;
            };
            let html = ` <tr class="tbl1"><td>Indirizzo</td><td>Targa 1</td>
            <td>Targa 2</td><td>Targa 3</td><td>Data</td><td>Ora</td><td>Feriti</td><td>Morti</td></tr>`
            data.forEach(() => {
                let html2 = "";
                html2 += templateRow.replace("#D1", data.indirizzo);
                html2 = html2.replace("#D2", data.targa1);
                html2 = html2.replace("#D3", data.targa2);
                html2 = html2.replace("#D4", data.targa3);
                html2 = html2.replace("#D5", data.data);
                html2 = html2.replace("#D6", data.ora);
                html2 = html2.replace("#D7", data.feriti);
                html2 = html2.replace("#D8", data.morti);   
                html += html2;             
            });
            
            
            
            parentElement.innerHTML = html;
        }
    }
};