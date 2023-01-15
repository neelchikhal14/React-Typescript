import Image from "./Image";
import LazyLoadedImage from "./LazyLoadedImage";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Images</h1>
      <Image
        imgSrc="https://i.picsum.photos/id/874/1000/500.jpg?hmac=IKkYjnrOJ625xtuduvlsKxYaB91d8_8cQ_mQXSA11g0"
        altText="Img-1"
      />
      <Image
        imgSrc="https://i.picsum.photos/id/614/1000/500.jpg?hmac=F6t5mn7GgXKf7_ZLOucvL7eDYHy-gRVQ5QhLceOVEEY"
        altText="Img-2"
      />
      <LazyLoadedImage
        imageSrc="https://i.picsum.photos/id/37/1000/500.jpg?hmac=XVpS9QGPNY_5H5CeCOXEkQGGSj5zHSuFk25dBR2-CoA"
        altText="Img-3"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum rem
        maxime in autem esse! Numquam sunt labore tenetur at minima velit
        delectus maiores vero quos, aliquid nulla aspernatur corrupti! Culpa
        inventore impedit, dicta blanditiis placeat suscipit quaerat.
        Voluptates, vero accusantium delectus dignissimos quibusdam quis,
        obcaecati quidem mollitia voluptate est blanditiis adipisci sit quisquam
        sed a? Eum tenetur aliquid est explicabo cum expedita maiores doloremque
        soluta, ratione, et dignissimos excepturi deleniti facere obcaecati
        accusamus molestias dolor nostrum repudiandae laboriosam non, eius
        consequuntur. Amet sunt tempora quisquam, nobis labore quos. Libero cum
        blanditiis dolorem aperiam! Ratione voluptates itaque iste hic dicta non
        nulla veritatis recusandae laborum laboriosam neque ad assumenda
        adipisci sunt tempore a sed consequatur, rerum dolor? Similique,
        aspernatur. Accusantium nostrum doloribus, eveniet quos quaerat corporis
        autem consequatur dicta culpa id! Odio pariatur, sint odit recusandae
        molestiae perspiciatis consequatur atque illo, tenetur nulla illum rerum
        ipsam qui ullam aliquid distinctio non, eaque voluptates quibusdam minus
        eos! Ratione obcaecati voluptatibus assumenda praesentium vel eius error
        labore sequi saepe inventore nam eos recusandae perferendis sit officiis
        minus, tempore ea, accusantium porro? Totam molestias, in maxime
        delectus temporibus odit ut. Facilis fugiat ipsam perspiciatis in
        delectus assumenda modi labore placeat corporis voluptatem doloribus,
        neque illum, deserunt sunt totam. Dolore labore, unde corrupti quibusdam
        ipsum, architecto incidunt libero numquam dolorum quos quidem aspernatur
        omnis sint totam odio natus ab eum esse minima dicta quasi culpa maxime
        itaque debitis. Qui architecto neque pariatur voluptatibus eaque quis
        animi delectus minima. Totam enim sit suscipit dicta! Nisi minima
        accusantium nam assumenda porro aspernatur atque, molestias debitis quod
        amet modi vitae eaque sit quos eos suscipit cumque iusto magni illo!
        Sint eaque quisquam officiis, excepturi doloribus quasi? Dignissimos
        officiis cumque rem nihil corporis tempore iure, natus vel et voluptatem
        pariatur laborum in dolorum dolores odit ex labore nisi eligendi tempora
        aperiam eos iusto? Possimus error velit ab numquam non? Assumenda
        placeat sapiente voluptates aperiam quisquam dolorem repudiandae, libero
        at numquam dignissimos minima molestiae dolores esse, quam alias ea
        veritatis quis excepturi sequi illum. Illum unde consequatur reiciendis
        illo commodi error deserunt laborum consequuntur dicta sunt ut, modi
        impedit inventore provident voluptates fuga autem aut non repudiandae
        expedita ea! Nisi, ipsam nemo aliquid exercitationem tempore fugiat
        minus pariatur adipisci. Vero ab velit enim consectetur! Numquam dolore,
        nam voluptatum earum quas sapiente officiis reiciendis possimus fuga cum
        iste pariatur cupiditate corrupti suscipit consequuntur veritatis amet
        rerum esse deleniti adipisci doloribus iusto animi placeat maiores.
        Iusto fugit, nostrum quaerat aliquam dolorem modi praesentium distinctio
        error culpa ipsam laborum fugiat cupiditate maxime aut quos temporibus
        optio! Obcaecati repellat, saepe qui repellendus laboriosam eius debitis
        soluta velit eos, natus, ex totam incidunt magnam nulla ipsa laborum
        eaque? Ea corporis sunt cumque libero officia, aperiam nulla, laudantium
        omnis vitae saepe magni ab quisquam blanditiis quibusdam exercitationem
        necessitatibus voluptatibus? Quis, earum assumenda eligendi quaerat
        natus, quia deserunt deleniti autem, iure facere minima velit nesciunt
        mollitia quasi obcaecati quisquam vel qui temporibus sed! Consequuntur
        possimus quibusdam quas quam provident at, quidem debitis ad sunt
        necessitatibus perferendis est.
      </p>
      <LazyLoadedImage
        imageSrc="https://i.picsum.photos/id/310/1000/500.jpg?hmac=Y7VIl58Ximxorw8KBXuqsQV1CiKuw3AgdKJlZ8-fRs4"
        altText="image-1"
      />
      <LazyLoadedImage
        imageSrc="https://i.picsum.photos/id/769/1000/500.jpg?hmac=Zigc5xNrQcQx907E-gbAtWCkmSW8tUPxEeICKLNzEk8"
        altText="image-1"
      />
      <LazyLoadedImage
        imageSrc="https://i.picsum.photos/id/928/1000/500.jpg?hmac=ZuEe3i5XKWC-csxbKkY-uTBQ1pt3CFtHiSQeNO6aGSw"
        altText="image-1"
      />
    </div>
  );
};

export default App;
