// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MORPH_TABLES_LH_METADATA: Metadata = {
    id: "34324860233ca7709fb6c2b4418a71bd3f0cbdf6.boutiques",
    name: "morph_tables-lh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MorphTablesLhParameters {
    "__STYXTYPE__": "morph_tables-lh";
    "input_file": InputPathType;
    "some_flag": boolean;
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
        "morph_tables-lh": morph_tables_lh_cargs,
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
        "morph_tables-lh": morph_tables_lh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `morph_tables_lh(...)`.
 *
 * @interface
 */
interface MorphTablesLhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output results from morphological analysis (example, adjust as needed)
     */
    output_file: OutputPathType;
}


function morph_tables_lh_params(
    input_file: InputPathType,
    some_flag: boolean = false,
): MorphTablesLhParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file for morphological analysis
     * @param some_flag Example flag (replace with actual options from tool if known)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "morph_tables-lh" as const,
        "input_file": input_file,
        "some_flag": some_flag,
    };
    return params;
}


function morph_tables_lh_cargs(
    params: MorphTablesLhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("morph_tables-lh");
    cargs.push(
        "-lh",
        execution.inputFile((params["input_file"] ?? null))
    );
    if ((params["some_flag"] ?? null)) {
        cargs.push("--some-flag");
    }
    return cargs;
}


function morph_tables_lh_outputs(
    params: MorphTablesLhParameters,
    execution: Execution,
): MorphTablesLhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MorphTablesLhOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([path.basename((params["input_file"] ?? null)), "_output.txt"].join('')),
    };
    return ret;
}


function morph_tables_lh_execute(
    params: MorphTablesLhParameters,
    execution: Execution,
): MorphTablesLhOutputs {
    /**
     * Morphological analysis tool for left hemisphere in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MorphTablesLhOutputs`).
     */
    params = execution.params(params)
    const cargs = morph_tables_lh_cargs(params, execution)
    const ret = morph_tables_lh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function morph_tables_lh(
    input_file: InputPathType,
    some_flag: boolean = false,
    runner: Runner | null = null,
): MorphTablesLhOutputs {
    /**
     * Morphological analysis tool for left hemisphere in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input file for morphological analysis
     * @param some_flag Example flag (replace with actual options from tool if known)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MorphTablesLhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MORPH_TABLES_LH_METADATA);
    const params = morph_tables_lh_params(input_file, some_flag)
    return morph_tables_lh_execute(params, execution);
}


export {
      MORPH_TABLES_LH_METADATA,
      MorphTablesLhOutputs,
      MorphTablesLhParameters,
      morph_tables_lh,
      morph_tables_lh_params,
};
