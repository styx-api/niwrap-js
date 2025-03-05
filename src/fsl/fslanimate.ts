// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLANIMATE_METADATA: Metadata = {
    id: "9c584c848682c3342403e26b38b71bebf6c12536.boutiques",
    name: "fslanimate",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslanimateParameters {
    "__STYXTYPE__": "fslanimate";
    "input_file": InputPathType;
    "output_file": string;
    "tmp_dir"?: string | null | undefined;
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
        "fslanimate": fslanimate_cargs,
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
        "fslanimate": fslanimate_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fslanimate(...)`.
 *
 * @interface
 */
interface FslanimateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting animation file
     */
    output_animation: OutputPathType;
}


function fslanimate_params(
    input_file: InputPathType,
    output_file: string,
    tmp_dir: string | null = null,
): FslanimateParameters {
    /**
     * Build parameters.
    
     * @param input_file Input image file (e.g., input.nii.gz)
     * @param output_file Output file (e.g., output.gif)
     * @param tmp_dir Temporary directory for intermediate files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslanimate" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    if (tmp_dir !== null) {
        params["tmp_dir"] = tmp_dir;
    }
    return params;
}


function fslanimate_cargs(
    params: FslanimateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslanimate");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["tmp_dir"] ?? null) !== null) {
        cargs.push((params["tmp_dir"] ?? null));
    }
    return cargs;
}


function fslanimate_outputs(
    params: FslanimateParameters,
    execution: Execution,
): FslanimateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslanimateOutputs = {
        root: execution.outputFile("."),
        output_animation: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function fslanimate_execute(
    params: FslanimateParameters,
    execution: Execution,
): FslanimateOutputs {
    /**
     * Tool for creating animations from imaging data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslanimateOutputs`).
     */
    params = execution.params(params)
    const cargs = fslanimate_cargs(params, execution)
    const ret = fslanimate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslanimate(
    input_file: InputPathType,
    output_file: string,
    tmp_dir: string | null = null,
    runner: Runner | null = null,
): FslanimateOutputs {
    /**
     * Tool for creating animations from imaging data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input image file (e.g., input.nii.gz)
     * @param output_file Output file (e.g., output.gif)
     * @param tmp_dir Temporary directory for intermediate files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslanimateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLANIMATE_METADATA);
    const params = fslanimate_params(input_file, output_file, tmp_dir)
    return fslanimate_execute(params, execution);
}


export {
      FSLANIMATE_METADATA,
      FslanimateOutputs,
      FslanimateParameters,
      fslanimate,
      fslanimate_params,
};
