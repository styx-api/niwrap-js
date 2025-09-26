export * as freesurfer from './freesurfer'
export * as mrtrix3tissue from './mrtrix3tissue'
export * as afni from './afni'
export * as c3d from './c3d'
export * as mrtrix from './mrtrix'
export * as workbench from './workbench'
export * as dcm2niix from './dcm2niix'
export * as ants from './ants'
export * as fastsurfer from './fastsurfer'
export * as fsl from './fsl'
export * as greedy from './greedy'
export * as niftyreg from './niftyreg'
import * as freesurfer from './freesurfer'
import * as mrtrix3tissue from './mrtrix3tissue'
import * as afni from './afni'
import * as c3d from './c3d'
import * as mrtrix from './mrtrix'
import * as workbench from './workbench'
import * as dcm2niix from './dcm2niix'
import * as ants from './ants'
import * as fastsurfer from './fastsurfer'
import * as fsl from './fsl'
import * as greedy from './greedy'
import * as niftyreg from './niftyreg'
import {Runner} from 'styxdefs'
export const version = '0.6.3';
export function execute(params: any, runner: Runner | null = null) {;
  const stype = params["@type"];
  if (stype.startsWith("freesurfer/")) return freesurfer.execute(params, runner);
  if (stype.startsWith("mrtrix3tissue/")) return mrtrix3tissue.execute(params, runner);
  if (stype.startsWith("afni/")) return afni.execute(params, runner);
  if (stype.startsWith("c3d/")) return c3d.execute(params, runner);
  if (stype.startsWith("mrtrix/")) return mrtrix.execute(params, runner);
  if (stype.startsWith("workbench/")) return workbench.execute(params, runner);
  if (stype.startsWith("dcm2niix/")) return dcm2niix.execute(params, runner);
  if (stype.startsWith("ants/")) return ants.execute(params, runner);
  if (stype.startsWith("fastsurfer/")) return fastsurfer.execute(params, runner);
  if (stype.startsWith("fsl/")) return fsl.execute(params, runner);
  if (stype.startsWith("greedy/")) return greedy.execute(params, runner);
  if (stype.startsWith("niftyreg/")) return niftyreg.execute(params, runner);
  return null;

}