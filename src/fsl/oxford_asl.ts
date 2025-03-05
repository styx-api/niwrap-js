// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const OXFORD_ASL_METADATA: Metadata = {
    id: "eadb081312f49bbddc149e22fee8be8a141e4596.boutiques",
    name: "oxford_asl",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface OxfordAslParameters {
    "__STYXTYPE__": "oxford_asl";
    "asl_data": InputPathType;
    "output_dir_name": string;
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
        "oxford_asl": oxford_asl_cargs,
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
        "oxford_asl": oxford_asl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `oxford_asl(...)`.
 *
 * @interface
 */
interface OxfordAslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Directory containing the output files
     */
    output_dir: OutputPathType;
}


function oxford_asl_params(
    asl_data: InputPathType,
    output_dir_name: string,
): OxfordAslParameters {
    /**
     * Build parameters.
    
     * @param asl_data Input ASL data
     * @param output_dir_name Output directory name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "oxford_asl" as const,
        "asl_data": asl_data,
        "output_dir_name": output_dir_name,
    };
    return params;
}


function oxford_asl_cargs(
    params: OxfordAslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("oxford_asl");
    cargs.push(
        "-i",
        execution.inputFile((params["asl_data"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_dir_name"] ?? null)
    );
    cargs.push("[options]");
    return cargs;
}


function oxford_asl_outputs(
    params: OxfordAslParameters,
    execution: Execution,
): OxfordAslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: OxfordAslOutputs = {
        root: execution.outputFile("."),
        output_dir: execution.outputFile([(params["output_dir_name"] ?? null)].join('')),
    };
    return ret;
}


function oxford_asl_execute(
    params: OxfordAslParameters,
    execution: Execution,
): OxfordAslOutputs {
    /**
     * Calculate perfusion maps from ASL data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `OxfordAslOutputs`).
     */
    params = execution.params(params)
    const cargs = oxford_asl_cargs(params, execution)
    const ret = oxford_asl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function oxford_asl(
    asl_data: InputPathType,
    output_dir_name: string,
    runner: Runner | null = null,
): OxfordAslOutputs {
    /**
     * Calculate perfusion maps from ASL data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param asl_data Input ASL data
     * @param output_dir_name Output directory name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `OxfordAslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(OXFORD_ASL_METADATA);
    const params = oxford_asl_params(asl_data, output_dir_name)
    return oxford_asl_execute(params, execution);
}


export {
      OXFORD_ASL_METADATA,
      OxfordAslOutputs,
      OxfordAslParameters,
      oxford_asl,
      oxford_asl_params,
};
