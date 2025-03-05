// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLSPLIT_METADATA: Metadata = {
    id: "588ee0f4afcc0ecee61fd388fbeb58790d2471e2.boutiques",
    name: "fslsplit",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslsplitParameters {
    "__STYXTYPE__": "fslsplit";
    "infile": InputPathType;
    "output_basename"?: string | null | undefined;
    "separation_z": boolean;
    "separation_time": boolean;
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
        "fslsplit": fslsplit_cargs,
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
        "fslsplit": fslsplit_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fslsplit(...)`.
 *
 * @interface
 */
interface FslsplitOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volumes/slices
     */
    out_files: OutputPathType | null;
}


function fslsplit_params(
    infile: InputPathType,
    output_basename: string | null = "vol",
    separation_z: boolean = false,
    separation_time: boolean = false,
): FslsplitParameters {
    /**
     * Build parameters.
    
     * @param infile Input image (e.g. img.nii.gz)
     * @param output_basename Output basename (default: vol)
     * @param separation_z Separate images in the z direction
     * @param separation_time Separate images in time (default behaviour)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslsplit" as const,
        "infile": infile,
        "separation_z": separation_z,
        "separation_time": separation_time,
    };
    if (output_basename !== null) {
        params["output_basename"] = output_basename;
    }
    return params;
}


function fslsplit_cargs(
    params: FslsplitParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslsplit");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    if ((params["output_basename"] ?? null) !== null) {
        cargs.push((params["output_basename"] ?? null));
    }
    if ((params["separation_z"] ?? null)) {
        cargs.push("-z");
    }
    if ((params["separation_time"] ?? null)) {
        cargs.push("-t");
    }
    return cargs;
}


function fslsplit_outputs(
    params: FslsplitParameters,
    execution: Execution,
): FslsplitOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslsplitOutputs = {
        root: execution.outputFile("."),
        out_files: ((params["output_basename"] ?? null) !== null) ? execution.outputFile([(params["output_basename"] ?? null)].join('')) : null,
    };
    return ret;
}


function fslsplit_execute(
    params: FslsplitParameters,
    execution: Execution,
): FslsplitOutputs {
    /**
     * Split a 4D image into separate volumes or a 3D image into separate slices.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslsplitOutputs`).
     */
    params = execution.params(params)
    const cargs = fslsplit_cargs(params, execution)
    const ret = fslsplit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslsplit(
    infile: InputPathType,
    output_basename: string | null = "vol",
    separation_z: boolean = false,
    separation_time: boolean = false,
    runner: Runner | null = null,
): FslsplitOutputs {
    /**
     * Split a 4D image into separate volumes or a 3D image into separate slices.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input image (e.g. img.nii.gz)
     * @param output_basename Output basename (default: vol)
     * @param separation_z Separate images in the z direction
     * @param separation_time Separate images in time (default behaviour)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslsplitOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLSPLIT_METADATA);
    const params = fslsplit_params(infile, output_basename, separation_z, separation_time)
    return fslsplit_execute(params, execution);
}


export {
      FSLSPLIT_METADATA,
      FslsplitOutputs,
      FslsplitParameters,
      fslsplit,
      fslsplit_params,
};
