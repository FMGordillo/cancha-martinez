import Modal from "./Modal"

export const TermsAndConditions = ({ acceptTerms, isVisible }) => (
  <Modal
    title="Términos y Condiciones"
    isVisible={isVisible}
    toggleModal={() => console.log("NOPE.jpg")}
  >
    <div id="terms-and-conditions">
      <p>
        <strong>
          Términos y Condiciones para la utilización de la cancha de fútbol
          ubicada en Site Martínez Calle Hipólito Yrigoyen 2149 Martinez,
          Provincia de Bs As.
        </strong>
      </p>

      <br />

      <p style={{ color: "red" }}>
        <b>
          NOTA: Para usar esta aplicación, debe aceptar los términos y
          condiciones al final de esta pantalla.
        </b>
      </p>
      <br />
      <p>
        <strong>1- Generalidades</strong>
      </p>
      <p>
        1.1. La utilización de la cancha de futbol 5 (en adelante “la Cancha”)
        en el site Martinez de IBM Argentina SRL (en adelante “La Compañía”)
        queda restringido para uso exclusivo de empleados activos IBM sin
        excepción. En todos los casos los participantes del juego deben poder
        acreditar su identidad y condición de empleado IBM, en el momento en que
        les sea requerido.
      </p>
      <p>
        1.2. La utilización de las instalaciones mencionadas en el precedente
        punto tiene como objetivo primario otorgar a quienes quieran hacer uso
        de ellas un momento de esparcimiento entre compañeros/as de trabajo. Los
        empleados participantes son responsables por el respeto, la ética, la
        moral y las buenas costumbres dentro de las instalaciones de La
        Compañía.
      </p>
      <p>
        1.3. El solo hecho de reservar y/o utilizar la cancha da por sentada la
        lectura y aceptación de los términos detallados en el presente. Sin
        perjuicio de ello, también se dará por comprendido y aceptado por la
        sola lectura del mail que contiene e informa los presentes Términos y
        Condiciones{" "}
      </p>
      <p>
        1.4. La Compañía será responsable de colocar en lugares visibles y
        cercanos a la cancha los presentes T&C al solo efecto de recordar el
        mismo en forma permanente a todos los empleados.{" "}
      </p>
      <p>
        1.5. La Compañía se reserva el derecho de cerrar, clausurar o suspender
        la cancha cuando lo considere oportuno y sin previo aviso, sea esto en
        forma temporal o definitiva.{" "}
      </p>
      <p>
        <strong>2- Días y horarios</strong>
      </p>
      <p>
        2.1. Los días y horarios en que la cancha está habilitada son los
        definidos por La Compañía y pueden ser modificados sin previo aviso. En
        todos los casos y sin excepción la cancha deberá ser utilizada fuera de
        la jornada laboral previa reserva y aceptación de los presentes T&C.
      </p>
      <br />
      <p>
        <strong>3- Reservas. Metodología</strong>
      </p>
      <p>
        3.1. Quien realice la reserva, de ahora en adelante el “Capitán”, será
        el referente del partido reservado y la persona a quien pueda
        contactarse por cualquier eventualidad.
      </p>
      <p>
        3.2. El capitán será quien realice la reserva a través del proceso
        definido mediante la aplicación destinada a tal efecto, cuya duración no
        puede superar la hora (1 hora de reserva).{" "}
      </p>
      <p>
        3.3. Las reservas pueden realizarse o anularse durante las 24 horas del
        día a través del proceso definido.
      </p>
      <p>
        3.4. Las reservas deben ser realizadas con una antelación no mayor a 2
        semanas. 😉{" "}
      </p>
      <p>
        3.5. Las reservas deben gestionarse pura y exclusivamente a través de la
        aplicación, ingresando a cancha-martinez.mybluemix.net{" "}
      </p>
      <p>
        3.6. Solo podrá utilizarse la cancha si la reserva previamente
        gestionada ha sido correctamente cargada y guardada en la aplicación
        descrita en punto precedente. La reserva puede ser cancelada por La
        Compañía sin previo aviso producto de factores climáticos, de
        mantenimiento, de seguridad o por decisión en tal sentido.
      </p>
      <p>
        3.7. El Capitán deberá velar por la correcta utilización de la Cancha
        conforme a su destino y será responsable de liderar su equipo para
        evitar que se produzca cualquier daño sobre la Cancha o sobre cualquier
        individuo participante del evento, debiendo responder ante las
        autoridades (Security, HR etc) por cualquier inconveniente o consulta
        relacionada con la actividad que su equipo desarrolla o ha desarrollado
        en la Cancha.
      </p>
      <p>
        <strong>4-Juego-reglas generales</strong>
      </p>
      <p>
        4.1. La cantidad de jugadores por equipo debe ser de entre 4 y 5. Sólo
        podrán jugar simultáneamente en la cancha hasta un máximo de 10
        jugadores.
      </p>
      <p>
        4.2. La pelota no será provista por La Compañía. Los jugadores deben
        contar con indumentaria adecuada y siempre deberán desempeñar la
        actividad deportiva con zapatillas estando prohibidos los botines de
        tapones altos y/o de aluminio (Prevención de lesiones y cuidado de la
        cancha).
      </p>
      <p>
        4.3. La Compañía se reserva el derecho de suspender el partido cuando lo
        considere oportuno ya sea por violaciones a los T&C o cuando por otros
        motivos lo considere necesario.
      </p>
      <p>
        4.4. La cancha no podrá ser utilizada sin reserva previa aun cuando se
        encuentre vacía o sin uso.
      </p>
      <br />
      <p>
        <strong>
          5.- Vestuarios-Puesta a disposición de Lockers (armarios)
        </strong>
      </p>
      <p>
        5.1 La Compañía pondrá a disposición de aquellos empleados que utilicen
        la cancha, el libre acceso a vestuarios y el uso de lockers (armarios)
        al solo efecto de la guarda de sus pertenencias personales en forma
        temporal y por el tiempo en que dure la utilización/reserva de la cancha
        (no superior a 1 hora). El uso de los mismos es discrecional y a
        voluntad del empleado quien es responsable de las pertenencias que
        guarda en el mismo.
      </p>
      <p>
        5.2 Los lockers a los que se hace referencia no poseen cerradura/candado
        por lo cual es responsabilidad del empleado la colocación y posterior
        remoción de sus pertenencias allí depositadas antes una vez finalizada
        la reserva de la cancha. Al finalizar el periodo de uso del locker es
        responsabilidad del usuario entregarlo en buen estado.
      </p>
      <p>
        5.3 No está permitido utilizar los lockers para guardar sustancias
        inflamables, químicos o sustancias peligrosas.
      </p>
      <p>
        5.4 La Compañía tiene el derecho de solicitar al usuario que desaloje el
        locker en caso de que se haga mal uso de éste así como se reserva el
        derecho de abrir aquellos lockers que por la razón que fuere permanezcan
        cerrados sin justificación alguna al finalizar la jornada.
      </p>
      <p>
        5.5 La Compañía no se hace responsable por la pérdida total o parcial
        y/o hurto de los bienes/pertenencias que hayan quedado guardadas bajo
        las pautas descriptas en este punto y/o por otra condición de guarda de
        los mismos.
      </p>
      <br />
      <p>
        <strong>6- Integridad Física-Lesiones-Daños. Responsabilidad</strong>
      </p>
      <p>
        6.1. Ante hechos fortuitos o imprevistos propios o no de la actividad
        que se está desarrollando (un juego deportivo) relacionados a la salud
        de los empleados intervinientes, La Compañía dispone de un servicio
        Médico de Emergencia quien puede/debe ser contactado a efectos de
        brindar atención primaria especializada en el lugar. Contactar al número
        911 desde cualquier teléfono/interno IBM
      </p>
      <p>
        6.2. La eventual utilización del Servicio Médico de Emergencia en modo
        alguno implica que cualquier dolencia o accidente producido durante el
        evento deportivo sea considerado enfermedad profesional por tratarse de
        una actividad desplegada fuera de la jornada de trabajo de los
        dependientes.
      </p>
      <p>
        6.3. La Compañía no se responsabiliza ni civil ni penalmente por daños,
        lesiones o cualquier enfermedad producida o adjudicada a la utilización
        de la cancha o las instalaciones y a los que estos T&C hacen referencia
        sobre las personas que voluntariamente hayan hecho uso de la misma.
      </p>
      <br />
      <p>
        <strong>7-Interpretación de estos T&C </strong>
      </p>
      <p>
        7.1. En caso de divergencias o cuestiones que se susciten en la
        interpretación o aplicación de estos T&C o en caso de dudas acerca de su
        funcionamiento e implementación, los dependientes deberán contactarse
        con Cancha Martinez a través de la herramienta utilizada para realizar
        las reservas ingresando al botón “consultas” quedando a cargo de La
        Compañía las decisiones finales respecto de dichas interpretaciones,
        diferendos o cuestionamiento.
      </p>
    </div>
    <button className="button is-primary" onClick={acceptTerms}>
      Acepto estos términos y condiciones
    </button>
  </Modal>
)
