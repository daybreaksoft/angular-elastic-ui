import { reducer } from 'src/app/core/layout/shared/layout.reducer';

/**
 * reducers
 */

export * from './src/app/reducers';
export * from './src/app/reducers';
export * from './src/app/reducers';

/**
 * animation
 */

export * from './src/app/app.animation';
export {reducer as layoutReducer} from './src/app/core/layout/shared/layout.reducer';
export {reducer as sidenavReducer} from './src/app/core/sidenav/shared/sidenav.reducer';

/**
 * utils
 */

export * from './src/app/core/utils/list.animation';
export * from './src/app/core/utils/media-replay.service';
export * from './src/app/core/utils/update-object';
export * from './src/app/core/utils/component-destroyed';
export * from './src/app/core/utils/utils.module';

/**
 * Core
 */

export * from './src/app/core/core.module';
export * from './src/app/core/layout/layout.component'
export * from './src/app/core/route-handler/route-handler.module';
export * from './src/app/core/page-header/page-header.module';
export * from './src/app/core/breadcrumbs/breadcrumbs.module';
export * from './src/app/core/list/list.module';