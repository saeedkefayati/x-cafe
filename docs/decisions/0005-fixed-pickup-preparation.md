# 0005 — Fixed pickup preparation

Status: Accepted

Date: 2026-08-25

## Decision

Version one uses three explicitly sample Tehran pickup branches and a fixed
45-minute preparation time for every branch and order. Checkout lets the guest
select a branch, shows whether that branch is currently accepting orders, and
stops same-day acceptance 45 minutes before closing.

Customer geolocation and route-time estimation are not part of this phase.
Checkout must not request or persist the customer's location.

## Rationale

- A fixed estimate is clear, testable, and sufficient for the first pickup flow.
- Accurate travel minutes require a routing provider, coordinates, traffic
  policy, and location permission.
- A rough distance heuristic could mislead customers and adds privacy cost
  without improving the core pickup task.
- The branch dataset remains visibly labeled as sample until production details
  are confirmed.

## Revisit when

- The business chooses a routing provider and provides confirmed coordinates.
- Preparation time becomes dependent on branch capacity or cart contents.
- Delivery is explicitly added to product scope.
