// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MORPH_TABLES_RH_METADATA: Metadata = {
    id: "0b7bdfd333d1ae3ca12dd01263420412372bb510.boutiques",
    name: "morph_tables-rh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MorphTablesRhParameters {
    "__STYXTYPE__": "morph_tables-rh";
    "options"?: string | null | undefined;
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
        "morph_tables-rh": morph_tables_rh_cargs,
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
 * Output object returned when calling `morph_tables_rh(...)`.
 *
 * @interface
 */
interface MorphTablesRhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function morph_tables_rh_params(
    options: string | null = null,
): MorphTablesRhParameters {
    /**
     * Build parameters.
    
     * @param options Options used by morph_tables-rh
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "morph_tables-rh" as const,
    };
    if (options !== null) {
        params["options"] = options;
    }
    return params;
}


function morph_tables_rh_cargs(
    params: MorphTablesRhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("morph_tables-rh");
    if ((params["options"] ?? null) !== null) {
        cargs.push(
            "-rh",
            (params["options"] ?? null)
        );
    }
    return cargs;
}


function morph_tables_rh_outputs(
    params: MorphTablesRhParameters,
    execution: Execution,
): MorphTablesRhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MorphTablesRhOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function morph_tables_rh_execute(
    params: MorphTablesRhParameters,
    execution: Execution,
): MorphTablesRhOutputs {
    /**
     * A tool from Freesurfer associated with morphological tables for the right hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MorphTablesRhOutputs`).
     */
    params = execution.params(params)
    const cargs = morph_tables_rh_cargs(params, execution)
    const ret = morph_tables_rh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function morph_tables_rh(
    options: string | null = null,
    runner: Runner | null = null,
): MorphTablesRhOutputs {
    /**
     * A tool from Freesurfer associated with morphological tables for the right hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param options Options used by morph_tables-rh
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MorphTablesRhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MORPH_TABLES_RH_METADATA);
    const params = morph_tables_rh_params(options)
    return morph_tables_rh_execute(params, execution);
}


export {
      MORPH_TABLES_RH_METADATA,
      MorphTablesRhOutputs,
      MorphTablesRhParameters,
      morph_tables_rh,
      morph_tables_rh_params,
};
