document.getElementById('add-expense').addEventListener('click', function() {
    // Get input values
    const Name = document.getElementById('name').value;
    const Date = document.getElementById('date').value;
    const Description = document.getElementById('description').value;
    const Amount = document.getElementById('amount').value;
    const Type1=document.getElementById('type1').value;

    if (Name && Date && Description && Amount &&Type1) {
        // Create a new row and cells
        const table = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const NameCell = newRow.insertCell(0);
        const DateCell = newRow.insertCell(1);
        const DescriptionCell = newRow.insertCell(2);
        const AmountCell = newRow.insertCell(3);
        const Type1Cell = newRow.insertCell(4);

        // Set cell values
        NameCell.textContent=Name;
        DateCell.textContent = Date;
        DescriptionCell.textContent = Description;
        AmountCell.textContent = Amount;
        Type1Cell.textContent= Type1;

        // Clear input fields
        document.getElementById('expense-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('del-expense').addEventListener('click', function() {
    const table = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
    if (table.rows.length > 2) {
        if (confirm('Are you sure you want to delete the last expense?')) {
            table.deleteRow(table.rows.length - 1);
        }
    } else {
        alert('No expenses to delete.');
    }
});
