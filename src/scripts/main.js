AOS.init();

const dataEvento = new Date('Jan 07, 2024 19:00:00');
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
                        const agoraTimesStamp = new Date().getTime();
                        const diferenca = timeStampEvento - agoraTimesStamp;
                        const distaciaDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                        const distaciaHoras = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const distaciaMinutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                        const distaciaSegundos = Math.floor((diferenca % (1000 * 60)) / 1000);

                        if (diferenca < 0) {
                            clearInterval(contaHoras);
                            document.getElementById('contador').innerHTML = 'Evento expirado';
                            return;
                        }else{
                            document.getElementById('contador').innerHTML = `${distaciaDias}d ${distaciaHoras}h ${distaciaMinutos}m ${distaciaSegundos}s`;
                        }
                    }, 1000)