import { Albums, ApiPaths } from "./enums"

export const albumsToApiPaths = new Map([
  [ Albums.ceremony, ApiPaths.ceremony ],
  [ Albums.couple, ApiPaths.couple ],
  [ Albums.engagement, ApiPaths.engagement ],
  [ Albums.family, ApiPaths.family ],
  [ Albums.gettingReady, ApiPaths.gettingReady ],
  [ Albums.reception, ApiPaths.reception ],
  [ Albums.puppies, ApiPaths.puppies ]
])