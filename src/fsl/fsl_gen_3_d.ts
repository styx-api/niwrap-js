// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_GEN_3_D_METADATA: Metadata = {
    id: "fedbab806e12207f35c280ae3cff6fb5299d9f99.boutiques",
    name: "fsl_gen_3D",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslGen3DParameters {
    "__STYXTYPE__": "fsl_gen_3D";
    "infile": InputPathType;
    "outfile": InputPathType;
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
        "fsl_gen_3D": fsl_gen_3_d_cargs,
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
        "fsl_gen_3D": fsl_gen_3_d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_gen_3_d(...)`.
 *
 * @interface
 */
interface FslGen3DOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated 3D snapshot of the structural image
     */
    output_snapshot: OutputPathType;
}


function fsl_gen_3_d_params(
    infile: InputPathType,
    outfile: InputPathType,
): FslGen3DParameters {
    /**
     * Build parameters.
    
     * @param infile Input structural image (e.g. input.nii.gz)
     * @param outfile Output 3D snapshot image (e.g. output.png)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_gen_3D" as const,
        "infile": infile,
        "outfile": outfile,
    };
    return params;
}


function fsl_gen_3_d_cargs(
    params: FslGen3DParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_gen_3D");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push(execution.inputFile((params["outfile"] ?? null)));
    return cargs;
}


function fsl_gen_3_d_outputs(
    params: FslGen3DParameters,
    execution: Execution,
): FslGen3DOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslGen3DOutputs = {
        root: execution.outputFile("."),
        output_snapshot: execution.outputFile([path.basename((params["outfile"] ?? null))].join('')),
    };
    return ret;
}


function fsl_gen_3_d_execute(
    params: FslGen3DParameters,
    execution: Execution,
): FslGen3DOutputs {
    /**
     * Tool to generate a 3D snapshot of a structural image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslGen3DOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_gen_3_d_cargs(params, execution)
    const ret = fsl_gen_3_d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_gen_3_d(
    infile: InputPathType,
    outfile: InputPathType,
    runner: Runner | null = null,
): FslGen3DOutputs {
    /**
     * Tool to generate a 3D snapshot of a structural image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input structural image (e.g. input.nii.gz)
     * @param outfile Output 3D snapshot image (e.g. output.png)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslGen3DOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_GEN_3_D_METADATA);
    const params = fsl_gen_3_d_params(infile, outfile)
    return fsl_gen_3_d_execute(params, execution);
}


export {
      FSL_GEN_3_D_METADATA,
      FslGen3DOutputs,
      FslGen3DParameters,
      fsl_gen_3_d,
      fsl_gen_3_d_params,
};
