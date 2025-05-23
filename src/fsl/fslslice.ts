// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLSLICE_METADATA: Metadata = {
    id: "53f7dd3f5b11635dce317a2eaf9912a856142727.boutiques",
    name: "fslslice",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslsliceParameters {
    "__STYXTYPE__": "fslslice";
    "volume": InputPathType;
    "output_basename"?: string | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "fslslice": fslslice_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "fslslice": fslslice_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fslslice(...)`.
 *
 * @interface
 */
interface FslsliceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Extracted 2D slices from the 3D volume
     */
    output_slices: OutputPathType | null;
}


function fslslice_params(
    volume: InputPathType,
    output_basename: string | null = null,
): FslsliceParameters {
    /**
     * Build parameters.
    
     * @param volume Input 3D volume (e.g. volume.nii.gz)
     * @param output_basename Output basename for extracted slices
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslslice" as const,
        "volume": volume,
    };
    if (output_basename !== null) {
        params["output_basename"] = output_basename;
    }
    return params;
}


function fslslice_cargs(
    params: FslsliceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslslice");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    if ((params["output_basename"] ?? null) !== null) {
        cargs.push((params["output_basename"] ?? null));
    }
    return cargs;
}


function fslslice_outputs(
    params: FslsliceParameters,
    execution: Execution,
): FslsliceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslsliceOutputs = {
        root: execution.outputFile("."),
        output_slices: ((params["output_basename"] ?? null) !== null) ? execution.outputFile([(params["output_basename"] ?? null), "_slice*.nii.gz"].join('')) : null,
    };
    return ret;
}


function fslslice_execute(
    params: FslsliceParameters,
    execution: Execution,
): FslsliceOutputs {
    /**
     * Tool to extract all slices from a 3D volume and store as 2D images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslsliceOutputs`).
     */
    params = execution.params(params)
    const cargs = fslslice_cargs(params, execution)
    const ret = fslslice_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslslice(
    volume: InputPathType,
    output_basename: string | null = null,
    runner: Runner | null = null,
): FslsliceOutputs {
    /**
     * Tool to extract all slices from a 3D volume and store as 2D images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param volume Input 3D volume (e.g. volume.nii.gz)
     * @param output_basename Output basename for extracted slices
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslsliceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLSLICE_METADATA);
    const params = fslslice_params(volume, output_basename)
    return fslslice_execute(params, execution);
}


export {
      FSLSLICE_METADATA,
      FslsliceOutputs,
      FslsliceParameters,
      fslslice,
      fslslice_params,
};
