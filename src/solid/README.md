# Principios y diseño de software SOLID

Vamos a dividirnos en equipos de dos personas y vamos a realizar una kata de SOLID en función de cual sea nuestro número de equipo.
Todas las katas reciben código legacy que fallan a la hora de seguir los principios SOLID.
En todas como primer paso debemos intentar hacer el test antes de cambiar la clase. Si el test te resulta dificil, ¿Puede que esté rompiendo los principios SOLID?

Las tareas a realizar son la siguientes:

1. Intentar hacer el testing con Jest u otro del código _Legacy_
2. Identificar las violaciones en los principios SOLID del código.
3. Realizar un diagrama UML de clases con la solución final al problema
4. Hacer los refactors (cuidado no romper las funcionalidades existentes) necesarios para que cumplan los principios SOLID.
5. Intentar volver a hacer test. ¿Es código más testable?

> [!Note]
> No se puede utilizar la función `jest.mock` ni `jest.spyOn` o similar para mockear las clases.

## Katas

- Kata 1: Race F1 Telemetry, Equipo 1
- Kata 2: Tire Presure Monitoring, Equipo 2
- Kata 3: Ticket Dispenser, Equipo 3

### Kata Race F1 Telemetry

Write the unit tests for the TelemetryDiagnosticControls class. The responsibility of the TelemetryDiagnosticControls class is to establish a connection to the telemetry server (through the TelemetryClient), send a diagnostic request and successfully receive the response that contains the diagnostic info. The TelemetryClient class provided for the exercise fakes the behavior of the real TelemetryClient class, and can respond with either the diagnostic information or a random sequence. The real TelemetryClient class would connect and communicate with the telemetry server via tcp/ip.

Tenéis el código base en la siguiente URL

- [Kata](https://github.com/emilybache/Racing-Car-Katas/tree/main/TypeScript/telemetry-system)

### Kata Tire Presure Monitoring

write the unit tests for the Alarm class. The Alarm class is designed to monitor tire pressure and set an alarm if the pressure falls outside of the expected range. The Sensor class provided for the exercise fakes the behaviour of a real tire sensor, providing random but realistic values.

Tenéis el código base en al siguiente URL:

- [Kata](https://github.com/emilybache/Racing-Car-Katas/tree/main/TypeScript/tire-pressure-monitoring-system)

---

### Kata Ticket Dispenser

write the unit tests for the TicketDispenser. The TicketDispenser class is designed to be used to manage a queuing system in a shop. There may be more than one ticket dispenser but the same ticket should not be issued to two different customers

Tenéis el código base en la siguiente URL:

- [Kata](https://github.com/emilybache/Racing-Car-Katas/tree/main/TypeScript/turn-ticket-dispenser)

Ejemplo de test para ticket:
it('foo', () => {
const dispenser = new TicketDispenser();
const ticket = dispenser.getTurnTicket();
expect(ticket.getTurnNumber()).toBe(-1);
});

## Entrega

Se realizará entrega individual de la Kata que os ha tocado dentro del repositorio que tenéis para el curso. Se debe entregar el código de la kata modificado, el diagrama UML y los test realizados.
