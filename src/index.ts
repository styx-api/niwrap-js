export * as afni from './afni'
export * as ants from './ants'
export * as c3d from './c3d'
export * as dcm2niix from './dcm2niix'
export * as fastsurfer from './fastsurfer'
export * as freesurfer from './freesurfer'
export * as fsl from './fsl'
export * as greedy from './greedy'
export * as mrtrix from './mrtrix'
export * as mrtrix3tissue from './mrtrix3tissue'
export * as niftyreg from './niftyreg'
export * as workbench from './workbench'
import * as afni from './afni'
import * as ants from './ants'
import * as c3d from './c3d'
import * as dcm2niix from './dcm2niix'
import * as fastsurfer from './fastsurfer'
import * as freesurfer from './freesurfer'
import * as fsl from './fsl'
import * as greedy from './greedy'
import * as mrtrix from './mrtrix'
import * as mrtrix3tissue from './mrtrix3tissue'
import * as niftyreg from './niftyreg'
import * as workbench from './workbench'
import {Runner} from 'styxdefs'
export const version = '0.7.0';
export function execute(params: any, runner: Runner | null = null) {;
  const stype = params["@type"];
  if (stype.startsWith("afni/")) return afni.execute(params, runner);
  if (stype.startsWith("ants/")) return ants.execute(params, runner);
  if (stype.startsWith("c3d/")) return c3d.execute(params, runner);
  if (stype.startsWith("dcm2niix/")) return dcm2niix.execute(params, runner);
  if (stype.startsWith("fastsurfer/")) return fastsurfer.execute(params, runner);
  if (stype.startsWith("freesurfer/")) return freesurfer.execute(params, runner);
  if (stype.startsWith("fsl/")) return fsl.execute(params, runner);
  if (stype.startsWith("greedy/")) return greedy.execute(params, runner);
  if (stype.startsWith("mrtrix/")) return mrtrix.execute(params, runner);
  if (stype.startsWith("mrtrix3tissue/")) return mrtrix3tissue.execute(params, runner);
  if (stype.startsWith("niftyreg/")) return niftyreg.execute(params, runner);
  if (stype.startsWith("workbench/")) return workbench.execute(params, runner);
  return null;

}