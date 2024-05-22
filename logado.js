function showCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('ultimo-login').textContent = `Último acesso: ${formattedDate}`;
}

showCurrentDate();