/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

let aracBilgileri = {
    id: 'bmw116d_123',
    model: 'bmw 116d',
    yil: '2015',
    renk: 'Beyaz',
    servisKayıtlari: [{
            id: 'bmw116d_1234_1',
            tarih: '30.01.2016',
            km: '13000',
            ücret: '900',
            detay: [{
                id: 'bmw116d_1234_1_1',
                işlem: 'Yağ değişimi',
                ücret: '300'
            }, {
                id: 'bmw116d_1234_1_2',
                işlem: 'filtre değişimi',
                ücret: '300'
            }, {
                id: 'bmw116d_1234_1_3',
                işlem: 'Fren Hidroliği',
                ücret: '300'
            }]
        },
        {
            id: 'bmw116d_1234_2',
            tarih: '10.01.2017',
            km: '28000',
            ücret: '1800',
            detay: [{
                id: 'bmw116d_1234_2_1',
                işlem: 'yağ değişimi',
                ücret: '350'
            }, {
                id: 'bmw116d_1234_2_2',
                işlem: 'filtre değişimi',
                ücret: '350'
            }, {
                id: 'bmw116d_1234_2_3',
                işlem: 'fren hidroliği',
                ücret: '300'
            }, {
                id: 'bmw116d_1234_2_4',
                işlem: 'balata değişimi',
                ücret: '800'
            }]
        }
    ]
}

console.log(aracBilgileri)