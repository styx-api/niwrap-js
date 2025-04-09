// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const POSSUM_INTERPMOT_METADATA: Metadata = {
    id: "19a05108d70a52f83dc7560156ab3b5bd08df5d8.boutiques",
    name: "possum_interpmot",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PossumInterpmotParameters {
    "__STYXTYPE__": "possum_interpmot";
    "motion_type": number;
    "tr": number;
    "tr_slice": number;
    "nslices": number;
    "nvols": number;
    "custom_motion_file": InputPathType;
    "output_file": string;
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
        "possum_interpmot": possum_interpmot_cargs,
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
        "possum_interpmot": possum_interpmot_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `possum_interpmot(...)`.
 *
 * @interface
 */
interface PossumInterpmotOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Interpolated motion output file
     */
    outfile: OutputPathType;
}


function possum_interpmot_params(
    motion_type: number,
    tr: number,
    tr_slice: number,
    nslices: number,
    nvols: number,
    custom_motion_file: InputPathType,
    output_file: string,
): PossumInterpmotParameters {
    /**
     * Build parameters.
    
     * @param motion_type Type of motion: 0 for continuous, 1 for between slices, 2 for between volumes
     * @param tr Repetition time in seconds
     * @param tr_slice Slice repetition time in seconds
     * @param nslices Number of slices
     * @param nvols Number of volumes
     * @param custom_motion_file Custom motion file
     * @param output_file Output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "possum_interpmot" as const,
        "motion_type": motion_type,
        "tr": tr,
        "tr_slice": tr_slice,
        "nslices": nslices,
        "nvols": nvols,
        "custom_motion_file": custom_motion_file,
        "output_file": output_file,
    };
    return params;
}


function possum_interpmot_cargs(
    params: PossumInterpmotParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("possum_interpmot.py");
    cargs.push(String((params["motion_type"] ?? null)));
    cargs.push(String((params["tr"] ?? null)));
    cargs.push(String((params["tr_slice"] ?? null)));
    cargs.push(String((params["nslices"] ?? null)));
    cargs.push(String((params["nvols"] ?? null)));
    cargs.push(execution.inputFile((params["custom_motion_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function possum_interpmot_outputs(
    params: PossumInterpmotParameters,
    execution: Execution,
): PossumInterpmotOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PossumInterpmotOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function possum_interpmot_execute(
    params: PossumInterpmotParameters,
    execution: Execution,
): PossumInterpmotOutputs {
    /**
     * Position Interpolation for Movers and Shakers.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PossumInterpmotOutputs`).
     */
    params = execution.params(params)
    const cargs = possum_interpmot_cargs(params, execution)
    const ret = possum_interpmot_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function possum_interpmot(
    motion_type: number,
    tr: number,
    tr_slice: number,
    nslices: number,
    nvols: number,
    custom_motion_file: InputPathType,
    output_file: string,
    runner: Runner | null = null,
): PossumInterpmotOutputs {
    /**
     * Position Interpolation for Movers and Shakers.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param motion_type Type of motion: 0 for continuous, 1 for between slices, 2 for between volumes
     * @param tr Repetition time in seconds
     * @param tr_slice Slice repetition time in seconds
     * @param nslices Number of slices
     * @param nvols Number of volumes
     * @param custom_motion_file Custom motion file
     * @param output_file Output file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PossumInterpmotOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(POSSUM_INTERPMOT_METADATA);
    const params = possum_interpmot_params(motion_type, tr, tr_slice, nslices, nvols, custom_motion_file, output_file)
    return possum_interpmot_execute(params, execution);
}


export {
      POSSUM_INTERPMOT_METADATA,
      PossumInterpmotOutputs,
      PossumInterpmotParameters,
      possum_interpmot,
      possum_interpmot_params,
};
