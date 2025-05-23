// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSLCPGEOM_METADATA: Metadata = {
    id: "2cee341aa83ab36ce9a32fd9150f0f2630b80b22.boutiques",
    name: "fslcpgeom",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslcpgeomParameters {
    "__STYXTYPE__": "fslcpgeom";
    "source_file": InputPathType;
    "destination_file": InputPathType;
    "dimensions_flag": boolean;
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
        "fslcpgeom": fslcpgeom_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fslcpgeom(...)`.
 *
 * @interface
 */
interface FslcpgeomOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fslcpgeom_params(
    source_file: InputPathType,
    destination_file: InputPathType,
    dimensions_flag: boolean = false,
): FslcpgeomParameters {
    /**
     * Build parameters.
    
     * @param source_file Source image file (e.g. img1.nii.gz)
     * @param destination_file Destination image file (e.g. img2.nii.gz)
     * @param dimensions_flag Don't copy image dimensions
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fslcpgeom" as const,
        "source_file": source_file,
        "destination_file": destination_file,
        "dimensions_flag": dimensions_flag,
    };
    return params;
}


function fslcpgeom_cargs(
    params: FslcpgeomParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fslcpgeom");
    cargs.push(execution.inputFile((params["source_file"] ?? null)));
    cargs.push(execution.inputFile((params["destination_file"] ?? null)));
    if ((params["dimensions_flag"] ?? null)) {
        cargs.push("-d");
    }
    return cargs;
}


function fslcpgeom_outputs(
    params: FslcpgeomParameters,
    execution: Execution,
): FslcpgeomOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslcpgeomOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fslcpgeom_execute(
    params: FslcpgeomParameters,
    execution: Execution,
): FslcpgeomOutputs {
    /**
     * FSL tool to copy image geometry from one file to another.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslcpgeomOutputs`).
     */
    params = execution.params(params)
    const cargs = fslcpgeom_cargs(params, execution)
    const ret = fslcpgeom_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fslcpgeom(
    source_file: InputPathType,
    destination_file: InputPathType,
    dimensions_flag: boolean = false,
    runner: Runner | null = null,
): FslcpgeomOutputs {
    /**
     * FSL tool to copy image geometry from one file to another.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param source_file Source image file (e.g. img1.nii.gz)
     * @param destination_file Destination image file (e.g. img2.nii.gz)
     * @param dimensions_flag Don't copy image dimensions
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslcpgeomOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSLCPGEOM_METADATA);
    const params = fslcpgeom_params(source_file, destination_file, dimensions_flag)
    return fslcpgeom_execute(params, execution);
}


export {
      FSLCPGEOM_METADATA,
      FslcpgeomOutputs,
      FslcpgeomParameters,
      fslcpgeom,
      fslcpgeom_params,
};
