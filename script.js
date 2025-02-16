function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let salary = document.getElementById("salary").value;

    if (!firstName || !lastName || !salary) {
        alert("Please fill all fields");
        return;
    }

    let doubledSalary = salary * 2;

    doc.setFont("helvetica", "bold");
    doc.text("Corporate Employee Details", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.text(`First Name: ${firstName}`, 20, 40);
    doc.text(`Last Name: ${lastName}`, 20, 50);
    doc.text(`Original Salary: ${salary}`, 20, 60);
    doc.text(`Doubled Salary: ${doubledSalary}`, 20, 70);

    doc.save(`${firstName}_${lastName}_Details.pdf`);
}
