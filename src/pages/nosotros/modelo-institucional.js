// src/pages/nosotros/modelo-institucional.js

import React from 'react';
import Layout from '@theme/Layout';

export default function ModeloInstitucional() {
  return (
    <Layout
      title="Modelo Institucional"
      description="Modelo Institucional de Aureum One: arquitectura de tres capas segregadas."
    >
      <main className="container margin-vert--lg">
        <h1>Modelo Institucional</h1>

        <section>
          <h2>Introducción: Una Arquitectura Institucional de Tres Capas</h2>
          <p>
            El Modelo Institucional de Aureum One está diseñado para ofrecer una estructura clara, segregada y verificable que conecta oro físico custodiado en Suiza con liquidación digital transparente, bajo un régimen de gobernanza independiente.
          </p>
          <p>
            Este modelo parte de un principio simple: cada función crítica del sistema debe existir en una capa propia, con responsabilidades bien definidas, límites claros y mecanismos de control independientes. De esta forma, se evita la concentración de poder, se reduce el riesgo operativo y se facilita la supervisión por parte de auditores, bancos y autoridades.
          </p>
          <p>El sistema está dividido en tres capas totalmente separadas:</p>

          <h3>Capa Física (Suiza) – oro 100% asignado bajo custodia profesional.</h3>
          <p>
            Es la base real del modelo: barras de oro físicamente almacenadas, segregadas y aseguradas en bóvedas suizas de alto estándar.
          </p>

          <h3>Capa Operativa & Gobernanza (Paraguay) – procesos, cumplimiento, reconciliación y supervisión.</h3>
          <p>
            Es la "mente" institucional del sistema: donde se realizan los controles, la contabilidad, el KYC/AML y la validación independiente de los eventos de emisión y rescate.
          </p>

          <h3>Capa de Liquidación Digital (XRPL) – token 1:1 con transparencia verificable.</h3>
          <p>
            Es la capa donde el oro se expresa en forma de token, permitiendo liquidez y transferencias globales con total visibilidad on-chain.
          </p>

          <p>
            Esta segregación evita conflictos de interés, mejora la claridad regulatoria y reduce el riesgo operativo.
          </p>
          <p>
            Cada capa puede ser auditada, evaluada y, si es necesario, ajustada sin comprometer la integridad de las demás. Ese diseño es coherente con la práctica de infraestructura financiera seria: activos, operación y liquidación no se mezclan en un único lugar, sino que se organizan con disciplina estructural.
          </p>
        </section>

        <section>
          <h2>Capa 1: Custodia de Oro Físico (Suiza)</h2>

          <h3>Rol de esta capa</h3>
          <p>
            Representa la base real del sistema: oro físico asignado y custodiado en Suiza por entidades especializadas y reconocidas.
          </p>
          <p>
            Sin esta capa, el token perdería su razón de ser. Todo lo que ocurre en las capas operativa y digital depende de que aquí exista oro físico real, claramente identificado, adecuadamente asegurado y documentado.
          </p>

          <h3>Características clave</h3>

          <h4>Oro 100% asignado (allocated)</h4>
          <p>
            Cada unidad de oro pertenece de forma inequívoca a la estructura de Aureum One, segregada del balance propio del custodio. No se trata de oro "genérico" o "no asignado", sino de posiciones claramente identificadas y rastreables.
          </p>

          <h4>Custodia profesional en bóvedas suizas</h4>
          <p>
            El oro se mantiene en bóvedas operadas por instituciones que cumplen estándares internacionales de seguridad, seguro, acceso restringido y controles de inventario.
          </p>

          <h4>Sin instrumentos derivados</h4>
          <p>
            La posición está compuesta por oro físico real, no por futuros, opciones u otros instrumentos sintéticos. Esto elimina el riesgo de contraparte asociado a derivados y simplifica el análisis regulatorio.
          </p>

          <h4>Sin rehypothecation</h4>
          <p>
            El oro que respalda el sistema no se presta, no se rehipoteca y no se reutiliza como colateral en otras operaciones. La única función de ese oro es respaldar las posiciones de Aureum One y sus clientes.
          </p>

          <h4>Reportes de posición validados</h4>
          <p>
            El custodio emite reportes periódicos que detallan el peso, la forma y la localización de las barras. Estos reportes son insumos para la contabilidad interna, para la reconciliación con el token y para la auditoría independiente.
          </p>

          <h4>Contabilidad física verificable</h4>
          <p>
            La posición de oro se registra de forma sistemática, con posibilidad de verificaciones puntuales (pruebas de inventario) y conciliaciones cruzadas entre custodio, Aureum One y auditor externo.
          </p>

          <h3>Por qué Suiza</h3>

          <h4>Estabilidad histórica en metales preciosos</h4>
          <p>
            Suiza es un hub global de metales preciosos, con décadas de experiencia en refinación, custodia y logística de oro para clientes institucionales.
          </p>

          <h4>Infraestructura de custodia certificada</h4>
          <p>
            Los custodios suizos relevantes operan bajo estándares altamente exigentes de seguridad, compliance y seguro, reforzando la confianza en la integridad del metal.
          </p>

          <h4>Protocolos estrictos de auditoría</h4>
          <p>
            La práctica de auditorías regulares —internas y externas— está integrada a la cultura de la industria suiza de metales, lo que encaja naturalmente con el modelo de Aureum One.
          </p>

          <h4>Neutralidad y estándares operativos globales</h4>
          <p>
            La ubicación en Suiza contribuye a una percepción de neutralidad geopolítica y cumplimiento de estándares reconocidos internacionalmente.
          </p>

          <p>
            La Capa Física no interactúa directamente con clientes ni con XRPL.
          </p>
          <p>
            Su único propósito es respaldar, de forma inequívoca, las posiciones de oro del sistema. Toda comunicación con clientes, socios y blockchain ocurre a través de las capas Operativa y de Liquidación Digital, que se apoyan en la Capa Física como fundamento material.
          </p>
        </section>

        <section>
          <h2>Capa 2: Gobernanza Operativa (Paraguay)</h2>
          <p>
            Esta capa gestiona la operación institucional y asegura que todo el proceso cumpla los estándares de gobernanza, cumplimiento y control.
          </p>
          <p>
            Es la capa donde se define "cómo" el sistema funciona en la práctica: quién valida clientes, cómo se registran las posiciones, quién autoriza una emisión, cómo se documenta un rescate y cómo se reporta todo esto a bancos, auditores y reguladores.
          </p>

          <h3>Funciones principales</h3>

          <h4>1. Cumplimiento (AML/KYC)</h4>
          <p><strong>Validación documental</strong></p>
          <p>
            Revisión estructurada de documentos de identidad, información societaria y evidencias de origen de fondos, conforme a la normativa local aplicable.
          </p>
          <p><strong>Evaluación de riesgo</strong></p>
          <p>
            Clasificación de clientes y operaciones según niveles de riesgo, aplicando controles reforzados cuando sea necesario (Enhanced Due Diligence).
          </p>
          <p><strong>Registros requeridos por normativa local</strong></p>
          <p>
            Conservación ordenada de expedientes de clientes, operaciones, alertas y reportes, de acuerdo con las exigencias de organismos como SEPRELAD y otras autoridades relevantes.
          </p>
          <p><strong>Prevención de abuso y trazabilidad regulatoria</strong></p>
          <p>
            Implementación de monitoreo continuo de transacciones, detección de operaciones sospechosas y, cuando corresponda, reporte oportuno a las autoridades.
          </p>

          <h4>2. Procesos Operativos</h4>
          <p><strong>Recepción de fondos</strong></p>
          <p>
            Organización y registro de entradas de dinero desde clientes y socios, con conciliación bancaria sistemática.
          </p>
          <p><strong>Ejecución de compras de oro</strong></p>
          <p>
            Conversión ordenada de los fondos recibidos en oro físico, siguiendo políticas de precios, márgenes y riesgo de mercado.
          </p>
          <p><strong>Confirmación de asignaciones</strong></p>
          <p>
            Registro formal de que el oro comprado ha sido efectivamente asignado a Aureum One en la Capa Física, con soporte documental del custodio.
          </p>
          <p><strong>Gestión de rescates</strong></p>
          <p>
            Procesamiento de solicitudes de venta o rescate, coordinando la quema (burn) del token, el ajuste de la posición de oro y la liquidación en moneda fiduciaria.
          </p>

          <h4>3. Contabilidad & Ledger Interno</h4>
          <p><strong>Libro contable de posiciones de oro</strong></p>
          <p>
            Registro estructurado de cuánto oro corresponde a la entidad y cuánto está asignado a clientes, en cada momento.
          </p>
          <p><strong>Registro de cada unidad representada</strong></p>
          <p>
            Trazabilidad de cada unidad de token emitido, vinculándola a una posición específica de oro físico y a un cliente o cuenta determinada.
          </p>
          <p><strong>Reconciliación interno–externo</strong></p>
          <p>Conciliaciones periódicas entre:</p>
          <p>reportes del custodio suizo,</p>
          <p>ledger interno,</p>
          <p>supply on-chain del token.</p>
          <p><strong>Evidencia verificable</strong></p>
          <p>
            Toda reconciliación genera evidencias documentales (reportes, logs, actas) que pueden ser revisadas por auditor externo, bancos y socios.
          </p>

          <h4>4. Auditor Externo Independiente</h4>
          <p><strong>Supervisión de procesos clave</strong></p>
          <p>
            Revisión periódica de la calidad y consistencia de los procesos operativos y de cumplimiento.
          </p>
          <p><strong>Validación de mint/burn</strong></p>
          <p>
            Confirmación independiente de que cada emisión y quema relevante está respaldada por movimientos reales de oro y reflejada correctamente en el ledger interno.
          </p>
          <p><strong>Control de reconciliaciones</strong></p>
          <p>
            Verificación de que las conciliaciones entre oro físico, contabilidad interna y blockchain se realizan, se documentan y se resuelven discrepancias.
          </p>
          <p><strong>Evaluación de cumplimiento</strong></p>
          <p>
            Opinión profesional sobre el grado de alineación del modelo con la normativa aplicable y con buenas prácticas de mercado.
          </p>

          <h4>5. Segregación de Funciones</h4>
          <p><strong>Operaciones ≠ Emisión</strong></p>
          <p>
            El equipo que gestiona el día a día operativo no tiene control unilateral sobre la emisión de tokens.
          </p>
          <p><strong>Contabilidad ≠ Tecnología</strong></p>
          <p>
            Quien registra y revisa los números no es el mismo que administra la infraestructura tecnológica.
          </p>
          <p><strong>Auditoría ≠ Gestión</strong></p>
          <p>
            El auditor no participa en la gestión comercial ni en las decisiones de riesgo, preservando su independencia.
          </p>
          <p><strong>Custodia ≠ Tokenización</strong></p>
          <p>
            El custodio de oro no es quien define la política de tokenización ni administra el token en la blockchain.
          </p>

          <p>
            Esta capa existe para garantizar disciplina institucional.
          </p>
          <p>
            Es el punto donde se traduce el activo físico en un sistema de reglas, controles y responsabilidades que permiten que el modelo escale sin perder gobernanza.
          </p>
        </section>

        <section>
          <h2>Capa 3: Liquidación Digital (XRPL)</h2>
          <p>
            La tercera capa representa la liquidación digital del oro físico.
          </p>
          <p>
            Es donde la posición de oro se vuelve utilizable en el mundo digital: transferible, divisible, liquidable en segundos y verificable por cualquier tercero que observe la blockchain.
          </p>

          <h3>Características institucionales</h3>

          <h4>1. Token 1:1 respaldado por oro asignado</h4>
          <p>
            Cada token representa una unidad exacta de oro físico custodiado.
          </p>
          <p>
            El principio es no negociable: el número total de tokens en circulación nunca puede exceder la cantidad de oro disponible en la Capa Física, tal como se refleja en el ledger interno de la Capa Operativa.
          </p>

          <h4>2. Transparencia on-chain</h4>
          <p><strong>Cualquier persona puede ver el supply</strong></p>
          <p>
            La cantidad total de tokens emitidos es pública, permitiendo a clientes, socios y auditores verificar el estado del sistema.
          </p>
          <p><strong>Mint/burn público</strong></p>
          <p>
            Los eventos de emisión y quema quedan registrados en la blockchain, con trazabilidad permanente.
          </p>
          <p><strong>Confirmación independiente del estado del sistema</strong></p>
          <p>Observadores externos pueden comparar:</p>
          <p>supply on-chain,</p>
          <p>reportes del custodio,</p>
          <p>información institucional publicada por Aureum One.</p>

          <h4>3. Gobernanza técnica</h4>
          <p><strong>Mint permitido solo con posición física confirmada</strong></p>
          <p>
            La lógica técnica (smart procedures, permisos y controles) asegura que no se pueda emitir sin que exista un proceso previo de compra y asignación de oro físicamente validado por la Capa Operativa y, cuando corresponda, por el auditor.
          </p>
          <p><strong>Burn requerido para rescates</strong></p>
          <p>
            No se procesa un pago de rescate sin la correspondiente quema de tokens. Esto mantiene la integridad de la paridad 1:1.
          </p>
          <p><strong>Eventos críticos supervisados por Auditor</strong></p>
          <p>
            Emisiones o quemas de volumen significativo, cambios en parámetros clave o ajustes de política de tokenización pasan por revisión y registro con participación del auditor independiente.
          </p>

          <h4>4. XRPL como rail de liquidación</h4>
          <p><strong>Estabilidad</strong></p>
          <p>
            XRPL es una red madura, con historial de operación continua y enfoque en liquidación de valor.
          </p>
          <p><strong>Costos previsibles</strong></p>
          <p>
            Comisiones bajas y relativamente estables, adecuadas para un producto institucional donde la previsibilidad importa tanto como el valor absoluto.
          </p>
          <p><strong>Validación descentralizada</strong></p>
          <p>
            Un conjunto distribuido de validadores refuerza la resistencia a puntos únicos de fallo y censura.
          </p>
          <p><strong>Tiempos de liquidación rápidos</strong></p>
          <p>
            Transacciones confirmadas en segundos, habilitando casos de uso de liquidez casi instantánea.
          </p>
          <p><strong>Standard institucional utilizado por bancos y emisores serios</strong></p>
          <p>
            La red es conocida por su enfoque en pagos y liquidación, lo que facilita el diálogo con instituciones tradicionales.
          </p>
        </section>

        <section>
          <h2>Por Qué Importa la Segregación</h2>
          <p>
            La separación estricta de las tres capas es un pilar del modelo.
          </p>

          <h3>Evita conflictos de interés</h3>
          <p>Cada capa tiene responsabilidades propias y límites claros.</p>
          <p>Quien custodia el oro no decide sobre la emisión del token.</p>
          <p>Quien programa el sistema no aprueba el onboarding de clientes.</p>
          <p>Quien audita no participa en la operación comercial.</p>

          <h3>Mejora la claridad regulatoria</h3>
          <p>
            Al tener funciones bien definidas por capa, las autoridades pueden evaluar cada bloque del modelo por separado:
          </p>
          <p>Capa Física: custodia de oro y cumplimiento de normas de metales preciosos.</p>
          <p>Capa Operativa: AML/KYC, contabilidad, contratos, relación con clientes.</p>
          <p>Capa Digital: emisión de tokens, gobernanza on-chain, integridad del supply.</p>
          <p>
            Esto reduce ambigüedades, facilita el diálogo con reguladores y permite ajustar el modelo por partes si cambian las normas.
          </p>

          <h3>Facilita auditoría independiente</h3>
          <p>Un auditor externo puede verificar:</p>
          <p>Oro físico – existencia, peso, tipo de barras, condiciones de custodia.</p>
          <p>Ledger interno – correspondencia entre posiciones de clientes, stock de oro y eventos de compra/venta.</p>
          <p>Supply on-chain – tokens emitidos y quemados, comparados con los registros internos y con los reportes del custodio.</p>
          <p>La separación facilita revisiones cruzadas y pruebas de integridad.</p>

          <h3>Reduce riesgo operativo</h3>
          <p>Un error en una capa no compromete o contamina a las otras:</p>
          <p>Un incidente en infraestructura tecnológica no altera la existencia física del oro.</p>
          <p>Un problema operativo local no modifica directamente el estado on-chain, si los controles están bien estructurados.</p>
          <p>Un cambio regulatorio puede manejarse ajustando principalmente la Capa Operativa, sin necesidad de desarmar la arquitectura física o digital.</p>
        </section>

        <section>
          <h2>Resumen del Ciclo de Vida Institucional</h2>
          <p>
            Este apartado sintetiza cómo fluye el modelo en condiciones normales de operación, desde la entrada de fondos hasta la liquidación final.
          </p>

          <h3>Flujo resumido del modelo (entrada)</h3>
          <p><strong>Fondo recibido</strong></p>
          <p>
            El cliente transfiere dinero a una cuenta bancaria de Aureum One, directamente o a través de un partner.
          </p>
          <p><strong>Compra de oro físico asignado</strong></p>
          <p>
            La Capa Operativa utiliza esos fondos para adquirir oro físico o ajustar la posición, respetando políticas internas de riesgo y liquidez.
          </p>
          <p><strong>Confirmación del custodio</strong></p>
          <p>
            El custodio suizo confirma que el oro ha sido recibido y asignado a la posición de Aureum One.
          </p>
          <p><strong>Registro en ledger interno</strong></p>
          <p>
            La Capa Operativa registra la nueva posición de oro en el libro contable interno, vinculando dicha posición con el cliente correspondiente.
          </p>
          <p><strong>Emisión (mint) equivalente en XRPL</strong></p>
          <p>
            Se emiten tokens en XRPL en la cantidad exacta correspondiente al oro físico asignado, y se acreditan en la billetera definida (custodia propia o del cliente).
          </p>
          <p><strong>Auditoría de evento</strong></p>
          <p>
            Dependiendo del tamaño y relevancia, el evento de emisión se somete a revisión por parte del auditor externo, o se incluye en muestreos y conciliaciones periódicas.
          </p>
          <p><strong>Cliente mantiene una posición digital 1:1 respaldada por oro</strong></p>
          <p>
            A partir de este momento, el cliente posee un activo digital con respaldo físico verificable, transferible y liquidable.
          </p>

          <h3>Flujo resumido del modelo (rescate – burn)</h3>
          <p><strong>Cliente solicita rescate</strong></p>
          <p>
            Puede ser una venta de tokens de vuelta a Aureum One o una solicitud explícita de liquidación en moneda fiduciaria.
          </p>
          <p><strong>Burn en XRPL</strong></p>
          <p>
            Los tokens correspondientes se queman (burn) o se retiran de circulación conforme a la política definida.
          </p>
          <p><strong>Reconciliación contable</strong></p>
          <p>
            La Capa Operativa ajusta el ledger interno para reflejar la reducción en la posición del cliente y en el total de tokens.
          </p>
          <p><strong>Liquidación fiduciaria al cliente</strong></p>
          <p>
            Aureum One procesa el pago en la moneda acordada (PYG, USD, BRL u otra), descontando las tarifas aplicables.
          </p>
          <p><strong>Auditoría del proceso</strong></p>
          <p>
            El flujo de rescate queda documentado y disponible para revisión interna y externa, con posibilidad de verificación cruzada entre banco, ledger interno y blockchain.
          </p>
        </section>

        <section>
          <h2>Declaración Institucional Final</h2>
          <p>
            El Modelo Institucional de Aureum One se construye sobre principios de claridad, seguridad y disciplina operativa.
          </p>
          <p>
            No se trata solo de tokenizar oro, sino de hacerlo de forma que resista el escrutinio de bancos, auditores y reguladores, hoy y en el futuro.
          </p>
          <p>
            Cada capa tiene una función, un propósito y controles independientes — exactamente como lo exige la infraestructura financiera seria:
          </p>
          <p>Una base de oro real, 100% asignado, custodiado en Suiza.</p>
          <p>Una capa de gobernanza real, con procesos, contabilidad y auditor externo.</p>
          <p>Una capa de liquidación verificable, apoyada en XRPL y en transparencia on-chain.</p>
          <p>
            En conjunto, esto configura una infraestructura con mentalidad suiza: prudente, metódica, centrada en preservación de valor y en confianza comprobable, no solo declarada.
          </p>
        </section>
      </main>
    </Layout>
  );
}
