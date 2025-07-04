// Hook for planet hover modal in control.js
(function() {
  // Returns an array of planet mesh objects for raycasting
  window.getPlanetMeshes = function() {
    var meshes = [];
    if (window.celestialBodies) {
      for (var k in celestialBodies) {
        var body = celestialBodies[k];
        // Only add if objectGroup exists and is a Mesh or Group
        if (body && body.objectGroup && body.objectGroup.type) {
          meshes.push(body.objectGroup);
        }
      }
    }
    return meshes;
  };

  // Returns details HTML for a planet
  window.getPlanetDetailsHTML = function(body) {
    if (!body) return '';
    var html = '<div class="planet-name">' + (body.name || '') + '</div>';
    if (body.radius) html += '<div><b>Radius:</b> ' + body.radius + '</div>';
    if (body.orbit && body.orbit.period) html += '<div><b>Orbit Period:</b> ' + body.orbit.period + '</div>';
    if (body.orbit && body.orbit.semiMajorAxis) html += '<div><b>Semi-Major Axis:</b> ' + body.orbit.semiMajorAxis + '</div>';
    if (body.rotation && body.rotation.period) html += '<div><b>Rotation Period:</b> ' + body.rotation.period + '</div>';
    if (body.parent) html += '<div><b>Parent:</b> ' + (typeof body.parent === 'string' ? body.parent : (body.parent.name || '')) + '</div>';
    return html;
  };
})();
